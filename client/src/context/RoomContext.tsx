import { useCreateRoom, useGetAllRoom } from "@app/hooks/useRoom";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { FormikHelpers } from "formik";
import React, { PropsWithChildren, useContext, useMemo } from "react";
import * as Yup from "yup";

type Values = {
  userId: string;
};

type ContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  initialValues: Values;
  validationSchema: Yup.ObjectSchema<Values>;
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => void;
  rooms: RoomPaginated | undefined;
  isLoadingRooms: boolean;
  isPending: boolean;
};

const initialValues: Values = {
  userId: "",
};

const validationSchema = Yup.object().shape({
  userId: Yup.string().required("Name is required"),
});

export const RoomContext = React.createContext<ContextType>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  initialValues,
  validationSchema,
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => {},
  rooms: undefined,
  isLoadingRooms: false,
  isPending: false,
});

export function RoomProvider({ children }: PropsWithChildren) {
  const { data: rooms, isLoading: isLoadingRooms, refetch } = useGetAllRoom();
  const createRoomMutation = useCreateRoom();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    toast.promise(
      createRoomMutation.mutateAsync(values, {
        onSuccess() {
          helpers.resetForm();
          refetch();
          onClose();
        },
      }),
      {
        success: { description: "Create room successfully" },
        error: { description: "Create room failed" },
        loading: { description: "Creating room" },
      }
    );
  };

  const isPending = useMemo(() => {
    return createRoomMutation.isPending;
  }, [createRoomMutation.isPending]);

  return (
    <RoomContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        initialValues,
        validationSchema,
        onSubmit,
        rooms,
        isLoadingRooms,
        isPending,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export const useRoomContext = () => useContext(RoomContext);
