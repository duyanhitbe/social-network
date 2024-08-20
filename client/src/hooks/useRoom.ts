import { getErrorMessage } from "@app/helpers/axios.helper";
import { getToken } from "@app/helpers/localStorage.helper";
import roomService from "@app/services/room.service";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllRoom = () => {
  const token = getToken();

  return useQuery({
    queryKey: ["room"],
    queryFn: () => roomService.getAll(token!),
  });
};

export const useCreateRoom = () => {
  const toast = useToast();
  const token = getToken();

  return useMutation({
    mutationFn: (data: CreateRoomRequest) => roomService.create(data, token!),
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};
