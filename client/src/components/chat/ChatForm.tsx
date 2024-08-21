import { MAX_WIDTH } from "@app/constants/style.constant";
import { useChatContext } from "@app/context/ChatContext";
import { Button, Flex, Input } from "@chakra-ui/react";

export default function ChatForm() {
  const { handleSendMessage, newMessage, setNewMessage } = useChatContext();

  return (
    <Flex
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      paddingX="1rem"
      position="fixed"
      bottom="5.5rem"
      left={{ base: "0", lg: "50%" }}
      w="100%"
      maxW={MAX_WIDTH}
      transform={{ base: "none", lg: "translate(-50%)" }}
    >
      <Input
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        borderRadius="full"
        mr="0.5rem"
        bgColor="white"
        boxShadow="sm"
      />
      <Button
        bgColor="teal.500"
        color="white"
        borderRadius="full"
        onClick={handleSendMessage}
        _hover={{
          bgColor: "teal.600",
        }}
      >
        Send
      </Button>
    </Flex>
  );
}
