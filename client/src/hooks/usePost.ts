import { getErrorMessage } from "@app/helpers/axios.helper";
import { getToken } from "@app/helpers/localStorage.helper";
import postService from "@app/services/post.service";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllPost = () => {
  const token = getToken();

  return useQuery({
    queryKey: ["post"],
    queryFn: () => postService.getAll(token!),
  });
};

export const useCreatePost = () => {
  const toast = useToast();
  const token = getToken();

  return useMutation({
    mutationFn: (data: CreatePostRequest) => postService.create(data, token!),
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};

export const useUpdatePost = () => {
  const toast = useToast();
  const token = getToken();

  return useMutation({
    mutationFn: (data: { id: string; data: UpdatePostRequest }) =>
      postService.update(data.id, data.data, token!),
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};

export const useDeletePost = () => {
  const toast = useToast();
  const token = getToken();

  return useMutation({
    mutationFn: (id: string) => postService.delete(id, token!),
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};
