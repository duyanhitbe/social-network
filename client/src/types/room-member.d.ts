declare global {
  type RoomMember = BaseModel & {
    userId: string;
    roomId: string;
    user?: User;
  };
}

export {};
