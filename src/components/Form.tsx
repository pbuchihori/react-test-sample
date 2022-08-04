import { FC } from "react";
import { Input } from "./Input";
import { Confirm } from "./Confirm";
import { Complete } from "./Complete";
import { useIsOpen } from "../hooks/utils/useIsOpen";
import { useForm } from "../hooks/form/useForm";

export const Form: FC = () => {
  const {
    state,
    errors,
    isCompleted,
    handleChangeEmail,
    handleChangeIsConfirmed,
    handleChangeIsNeedDM,
    handleChangeName,
    handleChangePassword,
    handleClickConfirm,
    handleClickSubmit
  } = useForm();

  const { email, password, isConfirmed, isNeedDM, name } = state;

  const { isOpen, handleClickClose, handleClickOpen } = useIsOpen();
  const handleClickConfirmWrapper = () => {
    handleClickConfirm({ onSuccess: handleClickOpen });
  };

  const handleClickSubmitWrapper = () => {
    handleClickSubmit({ onSuccess: handleClickClose });
  };

  return (
    <>
      <h1>登録フォーム</h1>
      {!isCompleted && (
        <Input
          errors={errors}
          name={name}
          email={email}
          password={password}
          isConfirmed={isConfirmed}
          isNeedDM={isNeedDM}
          handleChangeEmail={handleChangeEmail}
          handleChangeIsConfirmed={handleChangeIsConfirmed}
          handleChangeIsNeedDM={handleChangeIsNeedDM}
          handleChangePassword={handleChangePassword}
          handleClickConfirm={handleClickConfirmWrapper}
          handleChangeName={handleChangeName}
        />
      )}
      <Confirm
        isOpen={isOpen}
        onClickClose={handleClickClose}
        onClickSubmit={handleClickSubmitWrapper}
      />
      {isCompleted && <Complete />}
    </>
  );
};
