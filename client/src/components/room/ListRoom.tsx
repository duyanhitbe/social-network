import { useRoomContext } from '@app/context/RoomContext';
import { Stack } from '@chakra-ui/react';
import RoomItem from './RoomItem';

type Props = {};

export default function ListRoom({}: Props) {
	const { rooms } = useRoomContext();

	return (
		<Stack spacing="1rem">
			{rooms.map((room) => (
				<RoomItem
					key={room.id}
					room={room}
				/>
			))}
		</Stack>
	);
}
