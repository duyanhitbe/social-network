import { Flex } from "@chakra-ui/react";
import { FiBell, FiHome, FiMessageSquare, FiUser } from "react-icons/fi";
import NavIcon from "./NavIcon";

type Props = {
  bgColor: string;
  color: string;
  paddingX: string;
  paddingY: string;
  zIndex: string;
  tab?: string | null;
};

const NavItems = [
  { icon: FiHome, href: "/", tab: "home" },
  { icon: FiMessageSquare, href: "/chat", tab: "chat" },
  { icon: FiBell, href: "/notification", tab: "notification" },
  { icon: FiUser, href: "/profile", tab: "profile" },
];

function BottomNav({ bgColor, color, paddingX, paddingY, zIndex, tab }: Props) {
  return (
    <Flex
      as="nav"
      bg={bgColor}
      paddingY={paddingY}
      paddingX={paddingX}
      zIndex={zIndex}
      color={color}
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      justify="space-between"
      borderTopRadius={20}
    >
      {NavItems.map(({ icon, href, tab: navTab }) => (
        <NavIcon key={href} icon={icon} href={href} active={navTab === tab} />
      ))}
    </Flex>
  );
}

export default BottomNav;
