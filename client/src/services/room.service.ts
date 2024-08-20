import { getAxiosOptions } from "@app/helpers/axios.helper";
import axiosClient from "@app/utils/axiosClient";

class RoomService {
  async getAll(token: string) {
    const { data } = await axiosClient.get<RoomPaginated>(
      "/room",
      getAxiosOptions(token!)
    );
    return data;
  }

  async create(data: CreateRoomRequest, token: string) {
    const { data: result } = await axiosClient.post<Room>(
      "/room",
      data,
      getAxiosOptions(token)
    );
    return result;
  }
}

const roomService = new RoomService();

export default roomService;
