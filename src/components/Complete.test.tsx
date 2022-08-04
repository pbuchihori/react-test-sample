import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Complete } from "./Complete";

describe("Complete", () => {
  test("renders Complete registeredText", () => {
    render(<Complete />);
    expect(screen.getByText("登録完了!")).toBeInTheDocument();
  });
});
