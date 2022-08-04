import { FC } from "react";
import { Alert } from "react-bootstrap";

type ErrorsProps = {
  errors: string[];
};

export const ErrorAlert: FC<ErrorsProps> = ({ errors }) => {
  return (
    <>
      {errors.length > 0 && (
        <Alert variant="danger">
          <Alert.Heading>入力エラー</Alert.Heading>
          {errors.map((error, index) => (
            <p key={`error-${index}`}>{error}</p>
          ))}
        </Alert>
      )}
    </>
  );
};
