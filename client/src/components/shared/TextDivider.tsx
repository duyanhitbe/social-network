import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function TextDivider({ children }: PropsWithChildren) {
  return (
    <Box position="relative" my={4}>
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        {children}
      </AbsoluteCenter>
    </Box>
  );
}
