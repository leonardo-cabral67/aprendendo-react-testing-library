import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render my names list", () => {
    const { getByText } = render(<App />);

    expect(getByText("Leo")).toBeInTheDocument();
    expect(getByText("Pedro")).toBeInTheDocument();
    expect(getByText("Gabriel")).toBeInTheDocument();
  });

  it("should be able to add a new name to names list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);

    const input = getByPlaceholderText("Type a new name");
    const addButton = getByText("Add");

    await userEvent.type(input, "Victoria");
    await userEvent.click(addButton);

    expect(await findByText("Victoria")).toBeInTheDocument();
  });

  it("should be able to remove a name from list", async () => {
    const { queryByText, getAllByText } = render(<App />);

    const removeButton = getAllByText("Remove");

    await userEvent.click(removeButton[0]);

    await waitFor(() => {
      expect(queryByText("Leo")).not.toBeInTheDocument();
    });
  });
});
