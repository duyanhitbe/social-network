import {
  Select as ChakraSelect,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useField } from "formik";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  label: string;
}>;

export default function Select({
  children,
  placeholder,
  isRequired,
  label,
  ...props
}: Props) {
  const [field, meta] = useField(props);

  return (
    <FormControl
      {...field}
      isRequired={isRequired}
      isInvalid={!!meta.error && meta.touched}
    >
      <FormLabel htmlFor={props.id}>{label}</FormLabel>
      <ChakraSelect {...field} placeholder={placeholder}>
        {children}
      </ChakraSelect>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
