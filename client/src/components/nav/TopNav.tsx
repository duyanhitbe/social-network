import { Flex, Text } from "@chakra-ui/react";

type Props = {
  bgColor: string;
  color: string;
  paddingX: string;
  paddingY: string;
  zIndex: string;
  tab?: string | null;
};

function TopNav({ bgColor, color, paddingX, paddingY, zIndex, tab }: Props) {
  return (
    <Flex
      as="header"
      bg={bgColor}
      paddingY={paddingY}
      paddingX={paddingX}
      zIndex={zIndex}
      color={color}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      alignItems="center"
      justify="center"
      height={16}
      borderBottomRadius={5}
    >
      <Text fontSize="xl" fontWeight="bold" textTransform="capitalize">
        {tab}
      </Text>
    </Flex>
  );
}

export default TopNav;
