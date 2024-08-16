import { Flex, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  icon: any;
  count: number;
};

export default function PostItemActionIcon({
  title,
  icon: Icon,
  count,
}: Props) {
  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      padding="0.5rem"
      borderRadius={8}
      color="gray.600"
      _hover={{ bgColor: "teal.400", color: "white" }}
    >
      <Icon style={{ marginRight: "5px" }} />
      <Text mr="0.5rem">{title}</Text>
      <Text>{count}</Text>
    </Flex>
  );
}
