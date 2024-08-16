import { usePostContext } from "@app/context/PostContext";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { PropsWithChildren, useMemo } from "react";

export default function ModalCreateUpdatePost({ children }: PropsWithChildren) {
  const { isOpen, onClose } = usePostContext();
  const { action, initialValues, validationSchema, onSubmit } =
    usePostContext();

  const title = useMemo(() => {
    if (action === "update") return "Update your post";
    return "Create post";
  }, [action]);

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
