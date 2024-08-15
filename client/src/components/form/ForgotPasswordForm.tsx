"use client";

import {
  ForgotPasswordProvider,
  useForgotPasswordContext,
} from "@app/context/ForgotPasswordContext";
import { Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import AuthButton from "../auth/AuthButton";
import Input from "../shared/Input";

function ActionForm() {
  const { initialValues, validationSchema, onSubmit } =
    useForgotPasswordContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Stack spacing={4}>
          <Input id="email" name="email" type="email" label="Email" />
          <AuthButton>Send OTP</AuthButton>
        </Stack>
      </Form>
    </Formik>
  );
}

export default function ForgotPasswordForm() {
  return (
    <ForgotPasswordProvider>
      <ActionForm />
    </ForgotPasswordProvider>
  );
}
