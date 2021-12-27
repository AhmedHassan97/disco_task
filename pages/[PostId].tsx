import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import * as types from "../app/types/types";
import { useStore } from "../app/store/store";
import PostBlogComponent from "../app/components/posts/PosteBlogComponent";
import LayoutComponent from "../app/components/layout/LayoutComponent";
import LoadingComponent from "../app/components/layout/LoadingComponent";
const Post = () => {
  const { query, push } = useRouter();
  const [post, setPost] = useState<types.Post>();
  const [index, setIndex] = useState<Number>();
  const { posts, isLoggedIn } = useStore();

  useEffect(() => {
    if (isLoggedIn === false) {
      push("/");
    } else {
      const { PostId } = query;

      const requiredPost: types.Post = posts.filter(
        (post: types.Post) => post.id === PostId
      )[0];
      const index = posts.indexOf(requiredPost);

      setIndex(index);
      setPost(requiredPost);
    }
  }, [query, isLoggedIn, posts, push]);
  return (
    <div>
      <LayoutComponent>
        {post ? (
          <PostBlogComponent post={post} length={posts.length} index={index} />
        ) : (
          <LoadingComponent />
        )}
      </LayoutComponent>
    </div>
  );
};

export default Post;
