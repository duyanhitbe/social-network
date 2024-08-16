import Link from "@app/components/shared/Link";
import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";

export default function Page() {
  // Sample chat rooms data
  const chatRooms = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://bit.ly/broken-link",
      lastMessage: "Hey, how are you?",
      timestamp: "2:30 PM",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://bit.ly/broken-link",
      lastMessage: "Let's catch up later!",
      timestamp: "1:15 PM",
    },
    {
      id: 3,
      name: "Mark Wilson",
      avatar: "https://bit.ly/broken-link",
      lastMessage: "Great job on the project!",
      timestamp: "Yesterday",
    },
  ];

  return (
    <Box maxWidth="500px" margin="0 auto">
      {/* Chat Rooms List */}
      <Stack spacing="1rem">
        {chatRooms.map((room) => (
          <Link href="/chat/1" key={room.id}>
            <Flex
              key={room.id}
              padding="1rem"
              borderRadius="md"
              bg="white"
              boxShadow="sm"
              _hover={{ bg: "gray.50" }}
              cursor="pointer"
              alignItems="center"
              textDecoration="none"
            >
              <Avatar size="md" src={room.avatar} mr="1rem" />
              <Box flex="1">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Text fontWeight="bold">{room.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {room.timestamp}
                  </Text>
                </Flex>
                <Text fontSize="sm" color="gray.600" noOfLines={1}>
                  {room.lastMessage}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
