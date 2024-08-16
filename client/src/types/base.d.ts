declare global {
  type BaseModel = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }

  type Pagination<T> = {
    data: T[];
    pagination: {
      limit: number;
      page: number;
      total: number;
    };
  };
}

export {};
