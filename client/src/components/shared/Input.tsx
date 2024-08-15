"use client";
import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";
import { useCallback, useMemo, useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

type Props = {
  id: string;
  name: string;
  type?: "text" | "password" | "email";
  label: string;
  placeholder?: string;
  isRequired?: boolean;
};

export default function Input(props: Props) {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setshowPassword] = useState(false);

  const iconColor = useMemo(() => "#CCC", []);

  const labelColor = useMemo(() => {
    if (meta.touched && !!meta.error) return "#E53E3E";

    return "#000";
  }, [meta.touched, meta.error]);

  const type = useMemo(() => {
    if (props.type === "password") {
      return showPassword ? "text" : "password";
    }
    return props.type || "text";
  }, [showPassword, props.type]);

  const toggleShowPassword = useCallback(
    () => setshowPassword(!showPassword),
    [showPassword]
  );

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
      <InputGroup>
        <ChakraInput
          {...field}
          type={type}
          placeholder={props.placeholder}
          autoComplete="new-password"
        />
        {props.type === "password" && (
          <InputRightElement cursor="pointer">
            {showPassword ? (
              <RiEyeFill color={iconColor} onClick={toggleShowPassword} />
            ) : (
              <RiEyeOffFill color={iconColor} onClick={toggleShowPassword} />
            )}
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
