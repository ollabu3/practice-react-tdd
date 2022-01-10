import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCametWithSpaces } from "./App";
// test("button turns blue and red when clicked", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });
//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
//   expect(colorButton.textContent).toBe("Change to red");
// });

test("button disabled when checkbox checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "checkbox disabled" });

  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCametWithSpaces("Red")).toBe("Red");
  });
  test("works for no inner capital letter", () => {
    expect(replaceCametWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCametWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
