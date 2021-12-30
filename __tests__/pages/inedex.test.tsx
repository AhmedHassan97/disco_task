import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Login from "../../pages/index";

const mocks: any = []; // We'll fill this in next

describe("Login", () => {
  it("Login Page renders correctly", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Login />
      </MockedProvider>
    );

    const textbox_username = screen.getByRole("textbox", { name: /username/i });
    const textbox_password = screen.getByRole("password", {
      name: /password/i,
    });
    const image = screen.getByRole("img", { name: "logo" });

    expect(textbox_username).toBeInTheDocument();
    expect(textbox_password).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  }),
    it("should validate the form field", async () => {
      const mockSave = jest.fn();
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Login />
        </MockedProvider>
      );
      fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
        target: {
          value: "",
        },
      });

      fireEvent.input(screen.getByRole("password", { name: /password/i }), {
        target: { value: "" },
      });

      fireEvent.submit(screen.getByRole("button", { name: /submitButton/i }));
      expect(await screen.findByRole("usernameError")).toBeInTheDocument();
      expect(await screen.findByRole("passwordError")).toBeInTheDocument();

      expect(mockSave).not.toBeCalled();
    });
});
