"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      avatar: "https://bit.ly/broken-link",
      text: "Hello! How are you?",
      timestamp: "2:30 PM",
      isOwnMessage: false,
    },
    {
      id: 2,
      sender: "You",
      avatar: "",
      text: "I'm good, thanks! How about you?",
      timestamp: "2:32 PM",
      isOwnMessage: true,
    },
    {
      id: 3,
      sender: "John Doe",
      avatar: "https://bit.ly/broken-link",
      text: "Doing well, just finished a project.",
      timestamp: "2:34 PM",
      isOwnMessage: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const endOfMessagesRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        avatar: "",
        text: newMessage,
        timestamp: "Just now",
        isOwnMessage: true,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    (endOfMessagesRef.current as any)?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Flex
      maxW="500px"
      margin="0 auto"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <VStack spacing="1rem" flex="1" overflowY="auto" padding="1rem">
        {messages.map((message) => (
          <Flex
            key={message.id}
            alignSelf={message.isOwnMessage ? "flex-end" : "flex-start"}
            maxWidth="80%"
            flexDirection="column"
            alignItems={message.isOwnMessage ? "flex-end" : "flex-start"}
          >
            <HStack alignItems="flex-end" spacing="0.5rem">
              {!message.isOwnMessage && (
                <Avatar size="sm" src={message.avatar} />
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
                <Avatar size="sm" src={message.avatar} />
              )}
            </HStack>
            <Text
              fontSize="xs"
              color="gray.500"
              mt="0.25rem"
              alignSelf={message.isOwnMessage ? "flex-end" : "flex-start"}
            >
              {message.timestamp}
            </Text>
          </Flex>
        ))}
        <div ref={endOfMessagesRef} />
      </VStack>
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
        width={{ base: "100%", lg: "33%" }}
        transform={{ base: "none", lg: "translate(-50%)" }}
      >
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          borderRadius="full"
          mr="0.5rem"
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
    </Flex>
  );
}
