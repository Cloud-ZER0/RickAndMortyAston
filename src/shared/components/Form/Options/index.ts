import { RegisterOptions } from "react-hook-form";
import { FormFieldValues } from "../SignUpForm/SignUpForm";

export const EMAIL_OPTIONS: RegisterOptions<FormFieldValues, "login"> = {
  required: { value: true, message: "this field is required *" },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "invalid email address *",
  },
};

export const PASSWORD_OPTIONS: RegisterOptions<FormFieldValues, "password"> = {
  required: { value: true, message: "this filed is required *" },
  minLength: {
    value: 6,
    message: "min-lenght of password is 6 charecters *",
  },
};
