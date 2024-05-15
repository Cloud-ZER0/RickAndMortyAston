import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./SignUpForm.module.scss";
import { Button } from "../../UI/Button/Button";
import { LogoIcon } from "../../../icons/LogoIcon";
import { ErrMessage } from "../../UI/ErrMessage/ErrMessage";
import { auth } from "../../../firebase/firebase";
import { useSigneUp } from "../../../firebase/hooks";
import { Link } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { EMAIL_OPTIONS, PASSWORD_OPTIONS } from "../Options";

export interface FormFieldValues {
  login: string;
  password: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFieldValues>();

  const { registerUserWithEmailAndPassword, loading, error } = useSigneUp(auth);

  const onSubmit: SubmitHandler<FormFieldValues> = async (data) => {
    await registerUserWithEmailAndPassword(data.login, data.password);
    setValue("login", "");
    setValue("password", "");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <LogoIcon />
      <div className={styles.inputsWrap}>
        <Input
          labelName="Email"
          errors={errors.login}
          disabled={loading}
          id="email"
          placeholder="Enter your email"
          register={register("login", EMAIL_OPTIONS)}
        />
        <Input
          labelName="Password"
          errors={errors.password}
          disabled={loading}
          id="password"
          type="password"
          placeholder="Enter your password"
          register={register("password", PASSWORD_OPTIONS)}
        />
      </div>
      <div className={styles.btnWrapp}>
        <Button
          className={loading ? styles.loading : ""}
          variant="Primary"
          fill
          type="submit"
        >
          {" Sign Up!"}
        </Button>
        <Link className={styles.redirect} to={"/signin"}>
          Already have account?
        </Link>
      </div>
      {error && <ErrMessage>{error.message}</ErrMessage>}
    </form>
  );
};
