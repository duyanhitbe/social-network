import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

type Props = LinkProps &
  PropsWithChildren<{
    href: string;
  }>;

export default function Link({ children, href, ...props }: Props) {
  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      {children}
    </ChakraLink>
  );
}
