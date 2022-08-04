import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { ErrorAlert } from "./ErrorAlert";
import { FormState } from "./hooks/form/Form";

type InputProps = {
  errors: string[];
  handleChangeName: (name: string) => void;
  handleChangeEmail: (email: string) => void;
  handleChangePassword: (password: string) => void;
  handleChangeIsNeedDM: (checked: boolean) => void;
  handleChangeIsConfirmed: (checked: boolean) => void;
  handleClickConfirm: () => void;
} & FormState;

export const Input: FC<InputProps> = ({
  errors,
  name,
  isConfirmed,
  email,
  password,
  isNeedDM,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  handleChangeIsNeedDM,
  handleChangeIsConfirmed,
  handleClickConfirm
}) => {
  return (
    <Form>
      <ErrorAlert errors={errors} />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>氏名</Form.Label>
        <Form.Control
          type="text"
          placeholder="PB太郎"
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emailアドレス</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => handleChangeEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>パスワード</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleChangePassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDMCheckBox">
        <Form.Check
          type="checkbox"
          label="DMを受け取る"
          checked={isNeedDM}
          onChange={(e) => handleChangeIsNeedDM(e.target.checked)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmCheckBox">
        <Form.Check
          type="checkbox"
          label="利用規約に同意する"
          checked={isConfirmed}
          onChange={(e) => handleChangeIsConfirmed(e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleClickConfirm}>
        登録
      </Button>
    </Form>
  );
};
