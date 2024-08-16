import AuthBody from "@app/components/auth/AuthBody";
import AuthFooter from "@app/components/auth/AuthFooter";
import AuthHeader from "@app/components/auth/AuthHeader";
import AuthWrapper from "@app/components/auth/AuthWrapper";
import LoginForm from "@app/components/form/LoginForm";
import Link from "@app/components/shared/Link";
import { Flex } from "@chakra-ui/react";

export default function Page() {
  return (
    <AuthWrapper>
      <AuthHeader>Sign in to your account</AuthHeader>
      <AuthBody>
        <LoginForm>
          <Flex justifyContent="flex-end">
            <Link href="/forgot-password" color="teal">
              Forgot password?
            </Link>
          </Flex>
        </LoginForm>
        <AuthFooter form="login" />
      </AuthBody>
    </AuthWrapper>
  );
}
