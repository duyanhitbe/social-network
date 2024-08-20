declare global {
  type Room = BaseModel & {
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: Date;
    members: RoomMember[]
  };

  type RoomPaginated = Pagination<Room>;

  type CreateRoomRequest = {
    userId: string;
  };
}

export {};
