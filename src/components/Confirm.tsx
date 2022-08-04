import { FC } from "react";
import { Modal, Button } from "react-bootstrap";

type ConfirmProps = {
  isOpen: boolean;
  onClickClose: () => void;
  onClickSubmit: () => void;
};

export const Confirm: FC<ConfirmProps> = ({
  isOpen,
  onClickClose,
  onClickSubmit
}) => {
  return (
    <Modal show={isOpen} onHide={onClickClose}>
      <Modal.Header closeButton>
        <Modal.Title>登録してもよろしいですか？</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickClose}>
          戻る
        </Button>
        <Button variant="primary" onClick={onClickSubmit}>
          登録する
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Confirm;
