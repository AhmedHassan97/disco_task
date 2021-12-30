import { render, screen } from "@testing-library/react";
import PostCardComponent from "./PosteCardComponent";

describe("Home", () => {
  it("Post Card renders correctly", () => {
    render(
      <PostCardComponent
        title="post 1"
        content="some dummy content"
        id="asdasdh"
      />
    );
    const heading = screen.getByRole("heading", { name: /post 1/i });
    const content = screen.getByRole("contentinfo");

    expect(content).toHaveTextContent("some dummy content");
    expect(heading).toBeInTheDocument();
  });
});
