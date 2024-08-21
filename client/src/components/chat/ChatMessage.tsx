import { useChatContext } from "@app/context/ChatContext";
import { VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";

export default function ChatMessage() {
  const { messages } = useChatContext();

  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    (endOfMessagesRef.current as any)?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <VStack spacing="1rem" flex="1" overflowY="auto" padding="1rem">
      {messages.map((message) => (
        <ChatItem key={message.id} message={message} />
      ))}
      <div ref={endOfMessagesRef} />
    </VStack>
  );
}
