import { object, string, boolean, ValidationError } from "yup";
import { FormState } from "./Form";

const schema = object({
  name: string().required("氏名を入力してください"),
  email: string()
    .required("メールアドレスを入力してください")
    .email("メールアドレスを入力して下さい"),
  password: string()
    .required("パスワードを入力してください")
    .min(8, "パスワードは8桁以上である必要があります"),
  isConfirmed: boolean()
    .required()
    .oneOf([true], "利用規約に同意する必要があります"),
  isNeedDM: boolean().required()
});

export const FormValidator = {
  validate: async (formValue: FormState): Promise<string[]> => {
    let result: string[] = [];
    await schema
      .validate(formValue, { abortEarly: false })
      .catch((error: ValidationError) => {
        const { errors } = error;
        result = errors;
      });
    return result;
  }
};

// DB読み込み処理
// const db = ...
// 読み込んだ結果の操作ロジック
// const result = db...
