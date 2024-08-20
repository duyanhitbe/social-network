import {
  useCreatePost,
  useDeletePost,
  useGetAllPost,
  useUpdatePost,
} from "@app/hooks/usePost";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { FormikHelpers } from "formik";
import React, { PropsWithChildren, useContext, useMemo, useState } from "react";
import * as Yup from "yup";

type Values = {
  body: string;
  image: string | undefined | null;
};

type ContextType = {
  initialValues: Values;
  validationSchema: Yup.ObjectSchema<Values>;
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<any>;
  isPending: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  action: "create" | "update";
  setAction: React.Dispatch<React.SetStateAction<"create" | "update">>;
  post: Post | null;
  setPost: React.Dispatch<React.SetStateAction<Post | null>>;
  onDelete: (id: string) => void;
  posts: PostPaginated | undefined;
  isLoadingListPost: boolean;
};

const validationSchema = Yup.object().shape({
  body: Yup.string().required("Body is required"),
  image: Yup.string().optional(),
});

export const PostContext = React.createContext<ContextType>({
  initialValues: {
    body: "",
    image: "",
  },
  validationSchema,
  onSubmit: () => {},
  isPending: false,
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  action: "create",
  setAction: () => {},
  post: null,
  setPost: () => {},
  onDelete: (id: string) => {},
  posts: undefined,
  isLoadingListPost: false,
});

export function PostProvider({ children }: PropsWithChildren) {
  const {
    data: posts,
    isLoading: isLoadingListPost,
    refetch,
  } = useGetAllPost();
  const createPostMutation = useCreatePost();
  const updatePostMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [action, setAction] = useState<"create" | "update">("create");
  const [post, setPost] = useState<Post | null>(null);
  const toast = useToast();

  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    if (action === "create") {
      onCreate(values, helpers);
    }

    if (action === "update") {
      onUpdate(values, helpers);
    }
  };

  const onCreate = (values: Values, helpers: FormikHelpers<Values>) => {
    toast.promise(
      createPostMutation.mutateAsync(values, {
        onSuccess() {
          helpers.resetForm();
          refetch();
          onClose();
        },
      }),
      {
        success: { description: "Create post successfully" },
        error: { description: "Create post failed" },
        loading: { description: "Creating post" },
      }
    );
  };

  const onUpdate = (values: Values, helpers: FormikHelpers<Values>) => {
    if (!post?.id) return;

    const data = {
      id: post.id,
      data: values,
    };
    toast.promise(
      updatePostMutation.mutateAsync(data, {
        onSuccess() {
          helpers.resetForm();
          refetch();
          onClose();
        },
      }),
      {
        success: { description: "Update post successfully" },
        error: { description: "Update post failed" },
        loading: { description: "Updating post" },
      }
    );
  };

  const onDelete = (id: string) => {
    toast.promise(
      deletePostMutation.mutateAsync(id, {
        onSuccess() {
          refetch();
        },
      }),
      {
        success: { description: "Delete post successfully" },
        error: { description: "Delete post failed" },
        loading: { description: "Deleting post" },
      }
    );
  };

  const isPending = useMemo(() => {
    if (action === "create") return createPostMutation.isPending;
    if (action === "update") return updatePostMutation.isPending;

    return false;
  }, [action, createPostMutation.isPending, updatePostMutation.isPending]);

  const initialValues = useMemo(() => {
    if (!isOpen || action === "create") {
      return {
        body: "",
        image: "",
      };
    }

    return {
      body: post?.body || "",
      image: post?.image || "",
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
        posts,
        isLoadingListPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);
