import { useCallback, useReducer } from "react";

type Action = { type: "close" } | { type: "open" } | { type: "reverse" };

export const reducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case "close":
      return false;
    case "open":
      return true;
    case "reverse":
      return !state;
    default:
      return state;
  }
};

export const useIsOpen = (initalState: boolean = false) => {
  const [isOpen, dispatch] = useReducer(reducer, initalState);

  const handleClickClose = useCallback(() => {
    dispatch({ type: "close" });
  }, []);

  const handleClickOpen = useCallback(() => {
    dispatch({ type: "open" });
  }, []);

  const handleClickReverse = useCallback(() => {
    dispatch({ type: "reverse" });
  }, []);

  return {
    isOpen,
    handleClickOpen,
    handleClickClose,
    handleClickReverse
  };
};
