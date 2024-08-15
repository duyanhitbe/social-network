import { getErrorMessage } from "@app/helpers/axios.helper";
import { setToken } from "@app/helpers/localStorage.helper";
import authService from "@app/services/auth.service";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: authService.register,
    onSuccess() {
      toast({
        status: "success",
        description: "Registered successfully",
      });
    },
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};

export const useLogin = () => {
  const toast = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: authService.login,
    onSuccess(data) {
      setToken(data.accessToken);
      router.replace("/");
    },
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};

export const useLogout = () => {
  const toast = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess() {
      router.replace("/login");
    },
    onError(err: any) {
      const message = getErrorMessage(err);
      toast({
        status: "error",
        description: message,
      });
    },
  });
};
