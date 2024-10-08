import { IconButton } from "@chakra-ui/react";
import Link from "../shared/Link";

type Props = {
  icon: any;
  href?: string;
  active?: boolean;
};

export default function NavIcon({ icon: Icon, href, active }: Props) {
  const iconColor = active ? "teal.500" : "white";
  const bg = active ? "white" : "transparent";
  const _hover = {
    color: "teal.500",
    bgColor: "white",
  };

  const DisplayIcon = () => (
    <IconButton
      aria-label="Profile"
      color={iconColor}
      bg={bg}
      icon={<Icon />}
      variant="ghost"
      size="lg"
      _hover={_hover}
    />
  );

  if (href) {
    return (
      <Link href={href}>
        <DisplayIcon />
      </Link>
    );
  }

  return <DisplayIcon />;
}
