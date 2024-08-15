"use client";
import { Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function AuthWrapper({ children }: PropsWithChildren) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {children}
      </Stack>
    </Flex>
  );
}
