import { useRegister } from "@app/hooks/useAuth";
import { FormikHelpers } from "formik";
import React, { PropsWithChildren, useContext } from "react";
import * as Yup from "yup";

type Values = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ContextType = {
  initialValues: Values;
  validationSchema: Yup.ObjectSchema<Values>;
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<any>;
  isPending: boolean;
};

const initialValues: Values = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is not correct"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const RegisterContext = React.createContext<ContextType>({
  initialValues,
  validationSchema,
  onSubmit: () => {},
  isPending: false,
});

export function RegisterProvider({ children }: PropsWithChildren) {
  const { mutate, isPending } = useRegister();

  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    mutate(values, {
      onSuccess() {
        helpers.resetForm();
      },
    });
  };

  return (
    <RegisterContext.Provider
      value={{
        initialValues,
        validationSchema,
        onSubmit,
        isPending,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegisterContext = () => useContext(RegisterContext);
