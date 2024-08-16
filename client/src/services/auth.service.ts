import { getAxiosOptions } from "@app/helpers/axios.helper";
import axiosClient from "@app/utils/axiosClient";

class AuthService {
  async register(data: RegisterUserPayload): Promise<User> {
    const { data: result } = await axiosClient.post<User>(
      "/auth/register",
      data
    );
    return result;
  }

  async login(data: LoginUserPayload): Promise<LoginUserResponse> {
    const { data: result } = await axiosClient.post<LoginUserResponse>(
      "/auth/login",
      data
    );
    return result;
  }

  async logout(token: string) {
    const options = getAxiosOptions(token);
    const { data } = await axiosClient.post<LoginUserResponse>(
      "/auth/logout",
      {},
      options
    );
    return data;
  }
}

const authService = new AuthService();

export default authService;
