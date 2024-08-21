import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function PostItemWrapper({ children }: PropsWithChildren) {
  return (
    <Box
      padding="1.5rem"
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      mb="1.5rem"
    >
      {children}
    </Box>
  );
}
