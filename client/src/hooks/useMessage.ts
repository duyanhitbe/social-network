import { getErrorMessage } from "@app/helpers/axios.helper";
import { getToken } from "@app/helpers/localStorage.helper";
import messageService from "@app/services/message.service";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllMessageByRoom = (roomId: string) => {
  const token = getToken();

  return useQuery({
    queryKey: ["message", roomId],
    queryFn: () => messageService.getAllByRoom(roomId, token!),
  });
};

export const useCreateMessage = () => {
  const toast = useToast();
  const token = getToken();

  return useMutation({
    mutationFn: (data: CreateMessageRequest) =>
      messageService.create(data, token!),
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};
