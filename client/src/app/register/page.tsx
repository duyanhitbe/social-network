import AuthBody from "@app/components/auth/AuthBody";
import AuthFooter from "@app/components/auth/AuthFooter";
import AuthHeader from "@app/components/auth/AuthHeader";
import AuthWrapper from "@app/components/auth/AuthWrapper";
import RegisterForm from "@app/components/form/RegisterForm";

export default function Page() {
  return (
    <AuthWrapper>
      <AuthHeader>Sign up your account</AuthHeader>
      <AuthBody>
        <RegisterForm />
        <AuthFooter form="register" />
      </AuthBody>
    </AuthWrapper>
  );
}
