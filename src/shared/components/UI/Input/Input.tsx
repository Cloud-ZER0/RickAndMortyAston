import { FieldError } from "react-hook-form";
import { ErrMessage } from "../ErrMessage/ErrMessage";
import styles from "./Input.module.scss";

interface InputProps {
  disabled: boolean;
  labelName: string;
  id: string;
  placeholder: string;
  register: any;
  errors: FieldError | undefined;
  type?: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.inptWrap}>
      <label htmlFor="name">{props.labelName}</label>
      <input className={styles.input} {...props} {...props.register} />
      {props.errors && <ErrMessage>{props.errors.message}</ErrMessage>}
    </div>
  );
};
