import AuthBody from "@app/components/auth/AuthBody";
import AuthFooter from "@app/components/auth/AuthFooter";
import AuthHeader from "@app/components/auth/AuthHeader";
import AuthWrapper from "@app/components/auth/AuthWrapper";
import ForgotPasswordForm from "@app/components/form/ForgotPasswordForm";

export default function Page() {
  return (
    <AuthWrapper>
      <AuthHeader>Forgot password</AuthHeader>
      <AuthBody>
        <ForgotPasswordForm />
        <AuthFooter form="register" />
      </AuthBody>
    </AuthWrapper>
  );
}
