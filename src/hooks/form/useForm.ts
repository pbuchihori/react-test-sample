import { useCallback, useReducer, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FormValidator } from "./FormValidator";
import { FormState } from "./Form";

type Action =
  | { type: "onChangeEmail"; payload: { email: string } }
  | { type: "onChangeName"; payload: { name: string } }
  | {
      type: "onChangeIsConfirmed";
      payload: { isConfirmed: boolean };
    }
  | {
      type: "onChangeIsNeedDM";
      payload: {
        isNeedDM: boolean;
      };
    }
  | {
      type: "onChangePassword";
      payload: {
        password: string;
      };
    };

export const reducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case "onChangeEmail": {
      const { email } = action.payload;
      return { ...state, email };
    }
    case "onChangeName": {
      const { name } = action.payload;
      return { ...state, name };
    }
    case "onChangeIsConfirmed": {
      const { isConfirmed } = action.payload;
      return { ...state, isConfirmed };
    }
    case "onChangeIsNeedDM": {
      const { isNeedDM } = action.payload;
      return { ...state, isNeedDM };
    }
    case "onChangePassword": {
      const { password } = action.payload;
      return { ...state, password };
    }
    default:
      return state;
  }
};

export const useForm = (
  initialState: FormState = {
    email: "",
    name: "",
    password: "",
    isNeedDM: true,
    isConfirmed: false
  }
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChangeEmail = useCallback((email: string) => {
    dispatch({ type: "onChangeEmail", payload: { email } });
  }, []);

  const handleChangeName = useCallback((name: string) => {
    dispatch({ type: "onChangeName", payload: { name } });
  }, []);

  const handleChangeIsConfirmed = useCallback((isConfirmed: boolean) => {
    dispatch({ type: "onChangeIsConfirmed", payload: { isConfirmed } });
  }, []);

  const handleChangeIsNeedDM = useCallback((isNeedDM: boolean) => {
    dispatch({
      type: "onChangeIsNeedDM",
      payload: {
        isNeedDM
      }
    });
  }, []);

  const handleChangePassword = useCallback((password: string) => {
    dispatch({ type: "onChangePassword", payload: { password } });
  }, []);

  const { validate } = FormValidator;

  const handleClickConfirm = useCallback(
    async (option?: { onSuccess: () => unknown }) => {
      const result = await validate(state);
      setErrors(result);
      if (result.length === 0) {
        const { onSuccess } = option ?? {};
        if (onSuccess) {
          onSuccess();
        }
      }
    },
    [state, validate]
  );

  const { mutate, isSuccess } = useMutation((formValue: FormState) => {
    return fetch(".");
  });

  const handleClickSubmit = useCallback(
    (option?: { onSuccess: () => void }) => {
      mutate(state, option);
    },
    [mutate, state]
  );

  return {
    state,
    errors,
    isCompleted: isSuccess,
    handleChangeEmail,
    handleChangeName,
    handleChangeIsConfirmed,
    handleChangeIsNeedDM,
    handleChangePassword,
    handleClickConfirm,
    handleClickSubmit
  };
};
