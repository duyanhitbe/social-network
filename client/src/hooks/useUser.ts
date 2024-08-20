import { getToken } from "@app/helpers/localStorage.helper";
import userService from "@app/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUser = () => {
  const token = getToken();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getAll(token!),
  });
};

export const useGetMe = () => {
  const token = getToken();

  return useQuery({
    queryKey: ["user/me"],
    queryFn: () => userService.getMe(token!),
  });
};
