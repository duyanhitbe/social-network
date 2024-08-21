"use client";
import { ChatProvider } from "@app/context/ChatContext";
import { SocketProvider } from "@app/context/SocketContext";
import { Flex } from "@chakra-ui/react";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

type Props = {
  roomId: string;
};

export default function ChatPage({ roomId }: Props) {
  return (
    <SocketProvider>
      <ChatProvider roomId={roomId}>
        <Flex height="100%" display="flex" flexDirection="column">
          <ChatMessage />
          <ChatForm />
        </Flex>
      </ChatProvider>
    </SocketProvider>
  );
}
