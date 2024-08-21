declare global {
  type BaseModel = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  };

  type PageProps = {
    params: any;
    searchParams: any;
  };

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
