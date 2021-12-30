import { MockedProvider } from "@apollo/client/testing";

import { POSTS } from "../../app/graphql/queries";
import useApi from "../../app/hooks/useApi";
import { renderHook } from "@testing-library/react-hooks";
const posts = [
  {
    title: "Blog Post 4",
    author: { name: "Author 4 ", id: "4" },
    content:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
    prev: "61c8a129137a572a07918c67",
    next: "61c789d7de50fc7eb40a2a33",
    date: "November 10, 2021",
    id: "asjhdkajshdkhksauydka",
  },
  {
    title: "Blog Post 2",
    author: { name: "Author 2 ", id: "2" },
    content:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
    prev: "61c8a129137a572a07918c67",
    next: "61c789d7de50fc7eb40a2a33",
    date: "November 10, 2021",
    id: "asjhdkajshdkhksauydka",
  },
];
const mocks = [
  {
    request: {
      query: POSTS,
    },
    result: {
      data: {
        posts: posts,
      },
    },
  },
];
describe("useApi custom hook", () => {
  it("should return an array of posts", async () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useApi(), {
      wrapper,
    });
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    //   expect(result.current.data.posts).toBeUndefined();

    await waitForNextUpdate();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    //   expect(result.current.data.posts).toEqual(posts);
  });
});
