import AuthBody from "@app/components/auth/AuthBody";
import AuthFooter from "@app/components/auth/AuthFooter";
import AuthHeader from "@app/components/auth/AuthHeader";
import AuthWrapper from "@app/components/auth/AuthWrapper";
import LoginForm from "@app/components/form/LoginForm";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Page() {
  return (
    <AuthWrapper>
      <AuthHeader>Sign in to your account</AuthHeader>
      <AuthBody>
        <LoginForm>
          <Flex justifyContent="flex-end">
            <Link as={NextLink} href="/forgot-password" color="teal">
              Forgot password?
            </Link>
          </Flex>
        </LoginForm>
        <AuthFooter form="login" />
      </AuthBody>
    </AuthWrapper>
  );
}
