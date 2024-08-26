import { Post } from '@app/graphql/generated';
import { Box, Image, Text } from '@chakra-ui/react';

type Props = {
	post: Post;
};

export default function PostItemBody({ post }: Props) {
	return (
		<Box mb="1rem">
			<Text mb="1rem">{post.body}</Text>
			{post.image && (
				<Image
					src={post.image}
					alt="Project preview"
					borderRadius="md"
					cursor="pointer"
				/>
			)}
		</Box>
	);
}
