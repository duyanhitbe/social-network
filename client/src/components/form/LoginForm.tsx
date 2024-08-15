"use client";

import { LoginProvider, useLoginContext } from "@app/context/LoginContext";
import { Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { PropsWithChildren } from "react";
import AuthButton from "../auth/AuthButton";
import Input from "../shared/Input";

type Props = PropsWithChildren;

function ActionForm({ children }: PropsWithChildren) {
  const { initialValues, validationSchema, onSubmit, isPending } =
    useLoginContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Stack spacing={4}>
          <Input id="username" name="username" label="Username" />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
          />
          {children}
          <AuthButton isLoading={isPending}>Sign in</AuthButton>
        </Stack>
      </Form>
    </Formik>
  );
}

export default function LoginForm({ children }: Props) {
  return (
    <LoginProvider>
      <ActionForm>{children}</ActionForm>
    </LoginProvider>
  );
}
