import {
	Post,
	useCreatePostMutation,
	useDeletePostMutation,
	useGetAllPostQuery,
	useUpdatePostMutation,
} from '@app/graphql/generated';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { FormikHelpers } from 'formik';
import React, { PropsWithChildren, useContext, useMemo, useState } from 'react';
import * as Yup from 'yup';

type Values = {
	body: string;
	image: string | undefined | null;
};

type ContextType = {
	initialValues: Values;
	validationSchema: Yup.ObjectSchema<Values>;
	onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
	isPending: boolean;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	action: 'create' | 'update';
	setAction: React.Dispatch<React.SetStateAction<'create' | 'update'>>;
	post: Post | null;
	setPost: React.Dispatch<React.SetStateAction<Post | null>>;
	onDelete: (id: string) => void;
	posts: Post[] | undefined;
	isLoadingListPost: boolean;
};

const validationSchema = Yup.object().shape({
	body: Yup.string().required('Body is required'),
	image: Yup.string().optional(),
});

export const PostContext = React.createContext<ContextType>({
	initialValues: {
		body: '',
		image: '',
	},
	validationSchema,
	onSubmit: () => {},
	isPending: false,
	isOpen: false,
	onOpen: () => {},
	onClose: () => {},
	action: 'create',
	setAction: () => {},
	post: null,
	setPost: () => {},
	onDelete: (id: string) => {},
	posts: undefined,
	isLoadingListPost: false,
});

export function PostProvider({ children }: PropsWithChildren) {
	const { data, loading: isLoadingListPost, refetch } = useGetAllPostQuery();
	const [createPostMutate, { loading: loadingCreatePost }] = useCreatePostMutation();
	const [updatePostMutate, { loading: loadingUpdatePost }] = useUpdatePostMutation();
	const [deletePostMutate] = useDeletePostMutation();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [action, setAction] = useState<'create' | 'update'>('create');
	const [post, setPost] = useState<Post | null>(null);
	const toast = useToast();

	const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
		if (action === 'create') {
			onCreate(values, helpers);
		}

		if (action === 'update') {
			onUpdate(values, helpers);
		}
	};

	const onCreate = (values: Values, helpers: FormikHelpers<Values>) => {
		createPostMutate({
			variables: { data: values },
			onCompleted() {
				helpers.resetForm();
				refetch();
				onClose();
				toast({
					status: 'success',
					description: 'Create post successfully',
				});
			},
			onError() {
				toast({
					status: 'error',
					description: 'Create post failed',
				});
			},
		});
	};

	const onUpdate = (values: Values, helpers: FormikHelpers<Values>) => {
		if (!post?.id) return;

		const data = {
			id: post.id,
			data: values,
		};
		updatePostMutate({
			variables: data,
			onCompleted() {
				helpers.resetForm();
				refetch();
				onClose();
				toast({
					status: 'success',
					description: 'Update post successfully',
				});
			},
			onError() {
				toast({
					status: 'error',
					description: 'Update post failed',
				});
			},
		});
	};

	const onDelete = (id: string) => {
		deletePostMutate({
			variables: { id },
			onCompleted() {
				refetch();
				onClose();
				toast({
					status: 'success',
					description: 'Delete post successfully',
				});
			},
			onError() {
				toast({
					status: 'error',
					description: 'Delete post failed',
				});
			},
		});
	};

	const isPending = useMemo(() => {
		if (action === 'create') return loadingCreatePost;
		if (action === 'update') return loadingUpdatePost;

		return false;
	}, [action, loadingCreatePost, loadingUpdatePost]);

	const initialValues = useMemo(() => {
		if (!isOpen || action === 'create') {
			return {
				body: '',
				image: '',
			};
		}

		return {
			body: post?.body || '',
			image: post?.image || '',
		};
	}, [post, isOpen, action]);

	return (
		<PostContext.Provider
			value={{
				initialValues,
				validationSchema,
				onSubmit,
				isPending,
				isOpen,
				onOpen,
				onClose,
				action,
				setAction,
				post,
				setPost,
				onDelete,
				posts: (data?.getAllPost.data as any) || [],
				isLoadingListPost,
			}}
		>
			{children}
		</PostContext.Provider>
	);
}

export const usePostContext = () => useContext(PostContext);
