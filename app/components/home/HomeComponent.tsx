import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import PostCardComponent from "../posts/PosteCardComponent";
import * as types from "../../types/types";
import { useStore } from "../../store/store";
import { useRouter } from "next/router";
import LayoutComponent from "../layout/LayoutComponent";
import LoadingComponent from "../layout/LoadingComponent";
const HomeComponent = () => {
  const router = useRouter();
  const { postsFn, loading, data } = useApi();
  const { isLoggedIn, posts } = useStore();
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/");
    }
    postsFn();
  }, [isLoggedIn, postsFn, router]);
  return (
    <LayoutComponent>
      {loading === true && posts === [] ? <LoadingComponent /> : <div></div>}
      {posts ? (
        <div>
          {posts.map((post: types.Post) => {
            return (
              <PostCardComponent
                key={post.id}
                title={post.title}
                content={post.content}
                id={post.id}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </LayoutComponent>
  );
};

export default HomeComponent;
