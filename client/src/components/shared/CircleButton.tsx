import { Circle } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

type Props = {
  onClick: () => void;
};

export default function CircleButton({ onClick }: Props) {
  return (
    <Circle
      onClick={onClick}
      size="50px"
      bg="teal.500"
      shadow="lg"
      color="white"
      position="fixed"
      right={{ base: "2rem", lg: "35rem" }}
      bottom={{ base: "6.5rem" }}
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
