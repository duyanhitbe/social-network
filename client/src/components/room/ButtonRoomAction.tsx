import { useRoomContext } from "@app/context/RoomContext";
import CircleButton from "../shared/CircleButton";

export default function ButtonRoomAction() {
  const { onOpen } = useRoomContext();

  const onOpenModal = () => {
    onOpen();
  };

  return <CircleButton onClick={onOpenModal} />;
}
