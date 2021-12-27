export type LoginForm = {
  username: string;
  password: string;
};
export type User = {
  id: string;
  username: string;
};
export type Author = {
  name: string;
  id: Number;
};

export type Post = {
  id: string;
  title: string;
  author: Author;
  content: string;
  next: string;
  prev: string;
  date: string;
};
