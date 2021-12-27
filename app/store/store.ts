import create, { GetState, SetState } from "zustand";
import * as types from "../types/types";
import { devtools, persist, StoreApiWithPersist } from "zustand/middleware";

interface BlogPosts {
  isLoggedIn: Boolean;
  setIsLoggedIn: (isLoggedIn: Boolean) => void;

  user: types.User | null;
  addUser: (user: types.User) => void;
  removeUser: () => void;
  posts: Array<types.Post>;
  addPosts: (posts: Array<types.Post>) => void;
  removePosts: () => void;
}

export const useStore = create<
  BlogPosts,
  SetState<BlogPosts>,
  GetState<BlogPosts>,
  StoreApiWithPersist<BlogPosts>
>(
  persist(
    devtools((set) => ({
      // initial state
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: Boolean) => {
        set(() => ({
          isLoggedIn: isLoggedIn,
        }));
      },
      user: null,
      addUser: (user: types.User) => {
        set(() => ({
          user: user,
        }));
      },
      removeUser: () => {
        set(() => ({
          user: null,
        }));
      },
      posts: [],
      addPosts: (posts: Array<types.Post>) => {
        set(() => ({
          posts: posts,
        }));
      },
      removePosts: () => {
        set(() => ({
          posts: [],
        }));
      },
    })),
    {
      name: "blog-posts", // unique name
    }
  )
);
