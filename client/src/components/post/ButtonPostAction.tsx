import { usePostContext } from "@app/context/PostContext";
import CircleButton from "../shared/CircleButton";

type Props = {};

export default function ButtonPostAction({}: Props) {
  const { onOpen, setAction } = usePostContext();

  const onOpenModal = () => {
    setAction("create");
    onOpen();
  };

  return <CircleButton onClick={onOpenModal} />;
}
