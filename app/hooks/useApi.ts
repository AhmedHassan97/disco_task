import { useStore } from "../store/store";
import { useLazyQuery } from "@apollo/client";
import * as queries from "../graphql/queries";

const useApi = () => {
  const { addPosts } = useStore();
  const [postsQuery, { data, loading }] = useLazyQuery(queries.POSTS);
  console.log("🚀 ~ file: useApi.ts ~ line 8 ~ useApi ~ data", data);

  const postsFn = async () => {
    try {
      const result = await postsQuery();
      if (result.data.posts) {
        console.log(
          "🚀 ~ file: useApi.ts ~ line 13 ~ posts ~ result.data.posts",
          result.data.posts
        );

        addPosts(result.data.posts);
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  return { postsFn, loading, data };
};

export default useApi;
