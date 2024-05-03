type User = {
  id: number;
  name: string | null;
  email: string;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  id: number;
  userId: number;
  slug: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
