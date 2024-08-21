declare global {
  type Message = BaseModel & {
    text: string;
    roomId: string;
    userId: string;
    isOwnMessage: boolean;
    user?: User;
  };

  type MessagePaginated = Pagination<Message>;

  type CreateMessageRequest = {
    text: string;
    roomId: string;
  };
}

export {};
