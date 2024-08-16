import { getTokenAction } from "@app/actions/getToken.action";
import { getAxiosOptions } from "@app/helpers/axios.helper";
import axiosClient from "@app/utils/axiosClient";

class UserService {
  async getAll() {
    const { data } = await axiosClient.get<Pagination<User>>("/user");
    return data;
  }

  async getOne(id: string) {
    const { data } = await axiosClient.get<User>(`/user/${id}`);
    return data;
  }

  async getMe() {
    const token = getTokenAction();
    const { data } = await axiosClient.get<User>(
      `/user/me`,
      getAxiosOptions(token!)
    );
    return data;
  }
}

const userService = new UserService();

export default userService;
