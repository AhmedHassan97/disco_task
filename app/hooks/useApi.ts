import { useStore } from "../store/store";
import { useLazyQuery, useQuery } from "@apollo/client";
import * as queries from "../graphql/queries";
import { useMemo } from "react";

const useApi = () => {
  const { addPosts } = useStore();
  const { data, loading, error } = useQuery(queries.POSTS);

  const countries = useMemo(() => {
    if (data) {
      addPosts(data.posts);
    }
  }, [data, addPosts]);

  return { error, loading, data };
};

export default useApi;
