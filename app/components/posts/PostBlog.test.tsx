import { render, screen } from "@testing-library/react";

import PostBlogComponent from "./PosteBlogComponent";

describe("Post", () => {
  it("Post Blog renders correctly", () => {
    const post = {
      title: "Blog Post 4",
      author: { name: "Author 4 ", id: "4" },
      content:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      prev: "61c8a129137a572a07918c67",
      next: "61c789d7de50fc7eb40a2a33",
      date: "November 10, 2021",
    };
    render(<PostBlogComponent post={post} length={4} index={2} />);
    const heading = screen.getByRole("heading", { name: /Blog Post 4/i });
    const content = screen.getByRole("contentinfo");
    const information = screen.getByRole("blogInformation");

    expect(content).toHaveTextContent(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    expect(heading).toBeInTheDocument();
    expect(information).toBeInTheDocument();
  });
});
