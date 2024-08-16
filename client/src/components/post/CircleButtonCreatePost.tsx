import { usePostContext } from "@app/context/PostContext";
import { Circle } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

type Props = {};

export default function CircleButtonCreatePost({}: Props) {
  const { onOpen, setAction } = usePostContext();

  const onOpenModal = () => {
    setAction("create");
    onOpen();
  };

  return (
    <Circle
      onClick={onOpenModal}
      size="50px"
      bg="teal.500"
      shadow="lg"
      color="white"
      position="fixed"
      right="2rem"
      bottom="6.5rem"
      borderRadius="100%"
      cursor="pointer"
      _hover={{
        bgColor: "teal.600",
      }}
    >
      <FiPlus />
    </Circle>
  );
}
