import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  isLoading?: boolean;
}>;

export default function AuthButton({ children, isLoading }: Props) {
  return (
    <Button
      bg={"teal.400"}
      color={"white"}
      _hover={{
        bg: "teal.500",
      }}
      type="submit"
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
}
