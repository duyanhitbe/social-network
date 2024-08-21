import { FormikHelpers } from "formik";
import React, { PropsWithChildren, useContext } from "react";
import * as Yup from "yup";

type Values = {
  email: string;
};

type ContextType = {
  initialValues: Values;
  validationSchema: Yup.ObjectSchema<Values>;
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<any>;
};

const initialValues: Values = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is not correct"),
});

export const ForgotPasswordContext = React.createContext<ContextType>({
  initialValues,
  validationSchema,
  onSubmit: () => {},
});

export function ForgotPasswordProvider({ children }: PropsWithChildren) {
  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {};

  return (
    <ForgotPasswordContext.Provider
      value={{
        initialValues,
        validationSchema,
        onSubmit,
      }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
}

export const useForgotPasswordContext = () => useContext(ForgotPasswordContext);
