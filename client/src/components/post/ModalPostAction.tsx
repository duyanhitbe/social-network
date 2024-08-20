import { usePostContext } from "@app/context/PostContext";
import { PropsWithChildren, useMemo } from "react";
import FormModal from "../shared/FormModal";

export default function ModalPostAction({ children }: PropsWithChildren) {
  const { isOpen, onClose } = usePostContext();
  const { action, initialValues, validationSchema, onSubmit } =
    usePostContext();

  const title = useMemo(() => {
    if (action === "update") return "Update your post";
    return "Create post";
  }, [action]);

  return (
    <FormModal
      title={title}
      isOpen={isOpen}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      {children}
    </FormModal>
  );
}
