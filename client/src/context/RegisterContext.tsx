import { useRegisterUserMutation } from '@app/graphql/generated';
import { useToast } from '@chakra-ui/react';
import { FormikHelpers } from 'formik';
import { omit } from 'lodash';
import React, { PropsWithChildren, useContext } from 'react';
import * as Yup from 'yup';

type Values = {
	name: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

type ContextType = {
	initialValues: Values;
	validationSchema: Yup.ObjectSchema<Values>;
	onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
	isPending: boolean;
};

const initialValues: Values = {
	name: '',
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	username: Yup.string().required('Username is required'),
	email: Yup.string().required('Email is required').email('Email is not correct'),
	password: Yup.string().required('Password is required'),
	confirmPassword: Yup.string()
		.required('Confirm password is required')
		.oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const RegisterContext = React.createContext<ContextType>({
	initialValues,
	validationSchema,
	onSubmit: () => {},
	isPending: false,
});

export function RegisterProvider({ children }: PropsWithChildren) {
	const toast = useToast();
	const [mutate, { loading }] = useRegisterUserMutation();

	const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
		const data = omit(values, 'confirmPassword');

		mutate({
			variables: { data },
			onCompleted() {
				toast({
					status: 'success',
					description: 'Registered successfully',
				});
				helpers.resetForm();
			},
			onError({ message }) {
				toast({
					status: 'error',
					description: message,
				});
			},
		});
	};

	return (
		<RegisterContext.Provider
			value={{
				initialValues,
				validationSchema,
				onSubmit,
				isPending: loading,
			}}
		>
			{children}
		</RegisterContext.Provider>
	);
}

export const useRegisterContext = () => useContext(RegisterContext);
