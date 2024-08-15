import { Center, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  form: "login" | "register";
};

export default function AuthFooter({ form }: Props) {
  const questionText =
    form === "login" ? "Don't have an account?" : "Already have an account?";
  const actionText = form === "login" ? "Sign up" : "Sign in";
  const href = form === "login" ? "/register" : "/login";

  return (
    <Center>
      <Text>
        {questionText}{" "}
        <Link as={NextLink} href={href} color="teal">
          {actionText}
        </Link>
      </Text>
    </Center>
  );
}
