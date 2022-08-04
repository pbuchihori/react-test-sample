import { renderHook, act } from "@testing-library/react";
import { useIsOpen, reducer } from "./useIsOpen";

describe("useIsOpen", () => {
  describe("returnValue", () => {
    it("returns isOpen", () => {
      const { result } = renderHook(() => useIsOpen());
      const { isOpen } = result.current;

      expect(isOpen).toBe(false);
    });

    it("returns handleClickClose", () => {
      const { result } = renderHook(() => useIsOpen());
      const { handleClickClose } = result.current;

      expect(handleClickClose).toEqual(expect.any(Function));
    });
  });

  describe("handleClickOpen", () => {
    test("isOpen is true", () => {
      const { result } = renderHook(() => useIsOpen());
      const { handleClickOpen } = result.current;

      act(() => {
        handleClickOpen();
      });

      const { isOpen } = result.current;

      expect(isOpen).toBe(true);
    });
  });

  describe("reducer", () => {
    test("", () => {
      const actual = reducer(true, { type: "close" });
      expect(actual).toBe(false);
    });
  });
});
