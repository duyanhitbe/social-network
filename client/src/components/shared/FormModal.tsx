import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import { PropsWithChildren } from "react";
import * as Yup from "yup";

type Props = PropsWithChildren<{
  isOpen: boolean;
  title: string;
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  onClose: () => void;
}>;

export default function FormModal({
  children,
  isOpen,
  title,
  initialValues,
  validationSchema,
  onSubmit,
  onClose,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
      <ModalOverlay />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Formik>
    </Modal>
  );
}
