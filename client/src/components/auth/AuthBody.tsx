"use client";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function AuthBody({ children }: PropsWithChildren) {
  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack spacing={4}>{children}</Stack>
    </Box>
  );
}
