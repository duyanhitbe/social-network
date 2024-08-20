import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

export default function Page() {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      user: "John Doe",
      avatar: "https://bit.ly/broken-link",
      action: "liked your post",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "https://bit.ly/broken-link",
      action: "commented on your photo",
      time: "5 hours ago",
      isRead: true,
    },
    {
      id: 3,
      user: "Mark Wilson",
      avatar: "https://bit.ly/broken-link",
      action: "shared your post",
      time: "Yesterday",
      isRead: true,
    },
  ];

  return (
    <Box maxWidth="500px" margin="0 auto">
      {/* Notifications List */}
      {notifications.map((notification) => (
        <Flex
          key={notification.id}
          padding="1rem"
          borderRadius="md"
          bg={notification.isRead ? "gray.100" : "white"}
          _hover={{ bg: "gray.50" }}
          cursor="pointer"
          alignItems="center"
        >
          <Avatar size="md" src={notification.avatar} mr="1rem" />
          <Box flex="1">
            <Text fontSize="sm">
              <Text as="span" fontWeight="bold">
                {notification.user}
              </Text>{" "}
              {notification.action}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {notification.time}
            </Text>
          </Box>
          <IconButton
            icon={<FaEllipsisH />}
            variant="ghost"
            aria-label="Options"
          />
        </Flex>
      ))}
    </Box>
  );
}
