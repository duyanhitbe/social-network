import { User } from '@app/graphql/generated';
import { getAxiosOptions } from '@app/helpers/axios.helper';
import axiosClient from '@app/utils/axiosClient';

class UserService {
	async getAll(token: string) {
		const { data } = await axiosClient.get<Pagination<User>>('/user', getAxiosOptions(token));
		return data;
	}

	async getOne(id: string) {
		const { data } = await axiosClient.get<User>(`/user/${id}`);
		return data;
	}

	async getMe(token: string) {
		const { data } = await axiosClient.get<User>(`/user/me`, getAxiosOptions(token!));
		return data;
	}
}

const userService = new UserService();

export default userService;
