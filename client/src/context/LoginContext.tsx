import { useLogin } from "@app/hooks/useAuth";
import { FormikHelpers } from "formik";
import React, { PropsWithChildren, useContext } from "react";
import * as Yup from "yup";

type Values = {
  username: string;
  password: string;
};

type ContextType = {
  isPending: boolean;
  initialValues: Values;
  validationSchema: Yup.ObjectSchema<Values>;
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<any>;
};

const initialValues: Values = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginContext = React.createContext<ContextType>({
  initialValues,
  validationSchema,
  onSubmit: () => {},
  isPending: false,
});

export function LoginProvider({ children }: PropsWithChildren) {
  const { mutate, isPending } = useLogin();

  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    mutate(values);
  };

  return (
    <LoginContext.Provider
      value={{
        initialValues,
        validationSchema,
        onSubmit,
        isPending,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLoginContext = () => useContext(LoginContext);
