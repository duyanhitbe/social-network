import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Link from "../shared/Link";
import TimeAgo from "../shared/TimeAgo";

type Props = {
  room: Room;
};

export default function RoomItem({ room }: Props) {
  return (
    <Link href={`/chat/${room.id}`}>
      <Flex
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
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold">{room.name}</Text>
          </Flex>
          <Text fontSize="sm" color="gray.600" noOfLines={1}>
            {room.lastMessage || "Start the conversation"}
          </Text>
        </Box>
        <Text fontSize="sm" color="gray.500">
          <TimeAgo time={room.timestamp} />
        </Text>
      </Flex>
    </Link>
  );
}
