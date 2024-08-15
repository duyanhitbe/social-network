declare global {
  type RegisterUserPayload = {
    username: string;
    password: string;
    email: string;
  };

  type LoginUserPayload = {
    username: string;
    password: string;
  };

  type LoginUserResponse = {
    accessToken: string;
  };
}

export {};
