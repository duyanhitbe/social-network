declare global {
  type Post = BaseModel & {
    body: string;
    image?: string;
    likeCount: number;
    commentCount: number;
    shareCount: number;
    userId: string;
    user?: User;
  };

  type CreatePostRequest = {
    body: string;
    image?: string | undefined | null;
  };

  type UpdatePostRequest = {
    body?: string;
    image?: string | undefined | null;
  };
}

export {};
