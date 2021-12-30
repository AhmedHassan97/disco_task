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
  const { error, loading, data } = useApi();
  const { isLoggedIn, posts } = useStore();
  // useEffect(() => {
  //   postsFn();
  // }, []);
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/");
    }
  }, [isLoggedIn, router]);
  if (error) {
    return <h2>Uppps! There was an error</h2>;
  }
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <LayoutComponent>
      {data ? (
        <div className="space-y-3">
          {data.posts.map((post: types.Post) => {
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
