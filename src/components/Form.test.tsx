import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "./Form";

describe("Form", () => {
  beforeEach(() => {
    render(<Form />, {
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

const add = (a: number, b: number) => {
  return a + b;
};

// default で jestに入ってる
describe("add", () => {
  let actual: number;
  beforeEach(() => {});
  afterEach(() => {});
  describe("引数が2個のとき", () => {
    test("1 + 1 = 2", () => {
      actual = add(1, 1);
      expect(actual).toBe(2);
    });
    test("2 + 3 = 5", () => {
      actual = add(2, 3);
      expect(actual).toBe(5);
    });
  });
});
