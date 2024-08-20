import { useRoomContext } from "@app/context/RoomContext";
import { Box, Stack } from "@chakra-ui/react";
import RoomItem from "./RoomItem";

type Props = {};

export default function ListRoom({}: Props) {
  const { rooms } = useRoomContext();

  return (
    <Box maxWidth="500px" margin="0 auto">
      <Stack spacing="1rem">
        {rooms?.data.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </Stack>
    </Box>
  );
}
