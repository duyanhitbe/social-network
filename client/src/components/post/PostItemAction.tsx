import { Post } from '@app/graphql/generated';
import { Flex } from '@chakra-ui/react';
import { FiMessageCircle, FiShare, FiThumbsUp } from 'react-icons/fi';
import PostItemActionIcon from './PostItemActionIcon';

type Props = {
	post: Post;
};

export default function PostItemAction({ post }: Props) {
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			mt="1rem"
		>
			<PostItemActionIcon
				icon={FiThumbsUp}
				title="Like"
				count={post.likeCount}
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
