declare global {
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
