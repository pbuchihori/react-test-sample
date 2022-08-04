import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ErrorAlert } from "./ErrorAlert";

describe("ErrorAlert", () => {
  beforeEach(() => {
    render(<ErrorAlert />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      )
    });
  });

  describe("初期表示時", () => {
    test.todo("氏名欄が空欄であること");
    test.todo("Emailアドレスが空欄であること");
    test.todo("氏名欄が空欄であること");
    test.todo("氏名欄が空欄であること");
  });

  test("title", () => {
    expect(screen.getByText("登録フォーム")).toBeInTheDocument();
  });

  test("input name", () => {
    fireEvent.change(screen.getByRole("textbox", { name: "氏名" }), {
      target: {
        value: "PB太郎"
      }
    });
    expect(screen.getByRole("textbox", { name: "氏名" })).toHaveValue("PB太郎");
  });
});
