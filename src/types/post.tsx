export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  description?: string;
};

export type Posts = Post[];
