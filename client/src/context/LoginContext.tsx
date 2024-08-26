import { useLoginUserMutation } from '@app/graphql/generated';
import { setToken } from '@app/helpers/localStorage.helper';
import { useToast } from '@chakra-ui/react';
import { FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useContext } from 'react';
import * as Yup from 'yup';

type Values = {
	username: string;
	password: string;
};

type ContextType = {
	isPending: boolean;
	initialValues: Values;
	validationSchema: Yup.ObjectSchema<Values>;
	onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
};

const initialValues: Values = {
	username: '',
	password: '',
};

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Username is required'),
	password: Yup.string().required('Password is required'),
});

export const LoginContext = React.createContext<ContextType>({
	initialValues,
	validationSchema,
	onSubmit: () => {},
	isPending: false,
});

export function LoginProvider({ children }: PropsWithChildren) {
	const [mutate, { loading }] = useLoginUserMutation();
	const toast = useToast();
	const router = useRouter();

	const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
		mutate({
			variables: {
				data: values,
			},
			onCompleted(data) {
				console.log({ data });
				setToken(data.loginUser.accessToken);
				router.replace('/');
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
		<LoginContext.Provider
			value={{
				initialValues,
				validationSchema,
				onSubmit,
				isPending: loading,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
}

export const useLoginContext = () => useContext(LoginContext);
