import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  icon: any;
  onClick: () => void;
}>;

export default function ProfileButton({
  icon: Icon,
  children,
  onClick,
}: Props) {
  return (
    <Button
      onClick={onClick}
      leftIcon={<Icon />}
      justifyContent="flex-start"
      width="100%"
      bg="white"
      boxShadow="sm"
      paddingY="2rem"
      color="gray.600"
      _hover={{ boxShadow: "md", bgColor: "teal.500", color: "white" }}
    >
      {children}
    </Button>
  );
}
