import { GetAllPostDocument, GetAllPostQuery, Post, useLikeMutation } from '@app/graphql/generated';
import { Flex } from '@chakra-ui/react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { FiMessageCircle, FiShare } from 'react-icons/fi';
import PostItemActionIcon from './PostItemActionIcon';

type Props = {
	post: Post;
};

export default function PostItemAction({ post }: Props) {
	const [likeMutate] = useLikeMutation();

	const onLike = () => {
		likeMutate({
			variables: {
				data: {
					postId: post.id,
				},
			},
			update(cache) {
				cache.updateQuery<GetAllPostQuery>({ query: GetAllPostDocument }, (data) => {
					const posts = data?.getAllPost.data.map((item) => ({ ...item })) || [];
					const index = posts.findIndex((p) => p.id === post.id);
					if (index !== -1) {
						const post = posts[index];
						const count = post.isLiked ? -1 : 1;
						post.likeCount = post.likeCount + count;
						post.isLiked = !post.isLiked;
					}
					return {
						...data,
						getAllPost: {
							...data?.getAllPost,
							data: posts,
						},
					};
				});
			},
		});
	};

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			mt="1rem"
		>
			<PostItemActionIcon
				icon={post.isLiked ? FaThumbsUp : FaRegThumbsUp}
				title={post.isLiked ? 'Liked' : 'Like'}
				count={post.likeCount}
				textColor={post.isLiked ? 'teal.400' : undefined}
				onClick={onLike}
			/>
			<PostItemActionIcon
				icon={FiMessageCircle}
				title="Comment"
				count={post.commentCount}
			/>
			<PostItemActionIcon
				icon={FiShare}
				title="Share"
				count={post.shareCount}
			/>
		</Flex>
	);
}
