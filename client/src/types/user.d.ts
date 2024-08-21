declare global {
  type User = BaseModel & {
    name: string;
    username: string;
    email: string;
    avatar?: string;
  };
}

export {};
