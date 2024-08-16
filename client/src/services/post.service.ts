import { getAxiosOptions } from "@app/helpers/axios.helper";
import axiosClient from "@app/utils/axiosClient";

class PostService {
  async getAll(token: string) {
    const { data } = await axiosClient.get<Pagination<Post>>(
      "/post",
      getAxiosOptions(token!)
    );
    return data;
  }

  async create(data: CreatePostRequest, token: string) {
    const { data: result } = await axiosClient.post<Post>(
      "/post",
      data,
      getAxiosOptions(token)
    );
    return result;
  }

  async update(id: string, data: UpdatePostRequest, token: string) {
    const { data: result } = await axiosClient.patch<Post>(
      `/post/${id}`,
      data,
      getAxiosOptions(token)
    );
    return result;
  }

  async delete(id: string, token: string) {
    const { data: result } = await axiosClient.delete<Post>(
      `/post/${id}`,
      getAxiosOptions(token)
    );
    return result;
  }
}

const postService = new PostService();

export default postService;
