import { getAxiosOptions } from "@app/helpers/axios.helper";
import axiosClient from "@app/utils/axiosClient";

class MessageService {
  async getAllByRoom(roomId: string, token: string) {
    const { data } = await axiosClient.get<MessagePaginated>(
      `/message/room/${roomId}`,
      getAxiosOptions(token!)
    );
    return data;
  }

  async create(data: CreateMessageRequest, token: string) {
    const { data: result } = await axiosClient.post<Message>(
      "/message",
      data,
      getAxiosOptions(token)
    );
    return result;
  }
}

const messageService = new MessageService();

export default messageService;
