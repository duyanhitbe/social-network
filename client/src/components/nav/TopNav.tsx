import { MAX_WIDTH } from "@app/constants/style.constant";
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
      left={{ base: "0", lg: "50%" }}
      w="100%"
      maxW={MAX_WIDTH}
      transform={{ base: "none", lg: "translate(-50%)" }}
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
