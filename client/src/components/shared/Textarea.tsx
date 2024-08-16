import {
  Textarea as ChakraTextarea,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";
import { useMemo } from "react";

type Props = {
  placeholder: string;
  id: string;
  name: string;
  label: string;
  isRequired?: boolean;
};

export default function Textarea({ placeholder, ...props }: Props) {
  const [field, meta, helpers] = useField(props);

  const labelColor = useMemo(() => {
    if (meta.touched && !!meta.error) return "#E53E3E";

    return "#000";
  }, [meta.touched, meta.error]);

  return (
    <FormControl id={props.id} isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={props.id} color={labelColor}>
        {props.label}
        {props.isRequired && (
          <Text as="span" color="red">
            {" "}
            *
          </Text>
        )}
      </FormLabel>
      <ChakraTextarea
        {...field}
        placeholder={placeholder}
        size="sm"
        borderRadius={8}
        resize="none"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
