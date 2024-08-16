import { Center, Text } from "@chakra-ui/react";
import Link from "../shared/Link";

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
        <Link href={href} color="teal">
          {actionText}
        </Link>
      </Text>
    </Center>
  );
}
