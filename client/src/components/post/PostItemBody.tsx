import { Box, Image, Text } from "@chakra-ui/react";

export default function PostItemBody() {
  return (
    <Box mb="1rem">
      <Text mb="1rem">
        Just finished working on an exciting project! Feeling great and proud of
        the outcome. 🎉
      </Text>
      <Image
        src="https://bit.ly/placeholder-img"
        alt="Project preview"
        borderRadius="md"
        cursor="pointer"
      />
    </Box>
  );
}
