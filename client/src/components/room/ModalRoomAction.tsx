import { useRoomContext } from "@app/context/RoomContext";
import { PropsWithChildren } from "react";
import FormModal from "../shared/FormModal";

export default function ModalRoomAction({ children }: PropsWithChildren) {
  const { isOpen, onClose, initialValues, validationSchema, onSubmit } =
    useRoomContext();

  return (
    <FormModal
      title="Create room"
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
