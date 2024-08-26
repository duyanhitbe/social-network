import { Room, useCreateRoomMutation, useGetAllRoomQuery } from '@app/graphql/generated';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { FormikHelpers } from 'formik';
import React, { PropsWithChildren, useContext, useMemo } from 'react';
import * as Yup from 'yup';

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
	rooms: Room[];
	isLoadingRooms: boolean;
	isPending: boolean;
};

const initialValues: Values = {
	userId: '',
};

const validationSchema = Yup.object().shape({
	userId: Yup.string().required('Name is required'),
});

export const RoomContext = React.createContext<ContextType>({
	isOpen: false,
	onOpen: () => {},
	onClose: () => {},
	initialValues,
	validationSchema,
	onSubmit: (values: Values, helpers: FormikHelpers<Values>) => {},
	rooms: [],
	isLoadingRooms: false,
	isPending: false,
});

export function RoomProvider({ children }: PropsWithChildren) {
	const { data: roomsData, loading: isLoadingRooms, refetch } = useGetAllRoomQuery();
	const [createRoomMutate, { loading: loadingCreateRoom }] = useCreateRoomMutation();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
		createRoomMutate({
			variables: { data: values },
			onCompleted() {
				helpers.resetForm();
				refetch();
				onClose();
				toast({
					status: 'success',
					description: 'Create room successfully',
				});
			},
			onError() {
				toast({
					status: 'error',
					description: 'Create room failed',
				});
			},
		});
	};

	const isPending = useMemo(() => {
		return loadingCreateRoom;
	}, [loadingCreateRoom]);

	return (
		<RoomContext.Provider
			value={{
				isOpen,
				onOpen,
				onClose,
				initialValues,
				validationSchema,
				onSubmit,
				rooms: (roomsData?.getAllRoom.data as any) || [],
				isLoadingRooms,
				isPending,
			}}
		>
			{children}
		</RoomContext.Provider>
	);
}

export const useRoomContext = () => useContext(RoomContext);
