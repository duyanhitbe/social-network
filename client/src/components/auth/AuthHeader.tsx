import { Heading, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function AuthHeader({ children }: PropsWithChildren) {
  return (
    <Stack align={"center"}>
      <Heading fontSize={"3xl"} color="teal.400">
        {children}
      </Heading>
    </Stack>
  );
}
