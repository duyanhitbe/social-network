import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
      />
    </Center>
  );
}
