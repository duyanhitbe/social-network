"use client";

import {
  RegisterProvider,
  useRegisterContext,
} from "@app/context/RegisterContext";
import { Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import AuthButton from "../auth/AuthButton";
import Input from "../shared/Input";

function ActionForm() {
  const { initialValues, validationSchema, onSubmit, isPending } =
    useRegisterContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Stack spacing={4}>
          <Input id="name" name="name" label="Name" isRequired />
          <Input id="username" name="username" label="Username" isRequired />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            isRequired
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            isRequired
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm password"
            isRequired
          />
          <AuthButton isLoading={isPending}>Sign up</AuthButton>
        </Stack>
      </Form>
    </Formik>
  );
}

export default function RegisterForm() {
  return (
    <RegisterProvider>
      <ActionForm />
    </RegisterProvider>
  );
}
