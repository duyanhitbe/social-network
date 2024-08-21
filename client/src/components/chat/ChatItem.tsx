import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import TimeAgo from "../shared/TimeAgo";

type Props = {
  message: Message;
};

export default function ChatItem({ message }: Props) {
  return (
    <Flex
      key={message.id}
      alignSelf={message.isOwnMessage ? "flex-end" : "flex-start"}
      maxWidth="80%"
      flexDirection="column"
      alignItems={message.isOwnMessage ? "flex-end" : "flex-start"}
    >
      <HStack alignItems="flex-end" spacing="0.5rem">
        {!message.isOwnMessage && (
          <Avatar size="sm" src={message.user?.avatar} />
        )}
        <Box
          padding="0.75rem"
          bg={message.isOwnMessage ? "teal.500" : "gray.100"}
          color={message.isOwnMessage ? "white" : "black"}
          borderRadius="lg"
          maxW="15rem"
        >
          <Text>{message.text}</Text>
        </Box>
        {message.isOwnMessage && (
          <Avatar size="sm" src={message.user?.avatar} />
        )}
      </HStack>
      <Text
        fontSize="xs"
        color="gray.500"
        mt="0.25rem"
        alignSelf={message.isOwnMessage ? "flex-end" : "flex-start"}
      >
        <TimeAgo time={message.createdAt} />
      </Text>
    </Flex>
  );
}
