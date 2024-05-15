import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./SignInForm.module.scss";
import { Button } from "../../UI/Button/Button";
import { LogoIcon } from "../../../icons/LogoIcon";
import { ErrMessage } from "../../UI/ErrMessage/ErrMessage";
import { auth } from "../../../firebase/firebase";
import { useSigneIn } from "../../../firebase/hooks";
import { Link } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { EMAIL_OPTIONS, PASSWORD_OPTIONS } from "../Options";
import { FormFieldValues } from "../SignUpForm/SignUpForm";

interface SignInFormProps {
  toggleModal?: () => void;
}

export const SignInForm = ({ toggleModal }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFieldValues>();

  const { registerUserWithEmailAndPassword, loading, error } = useSigneIn(auth);

  const onSubmit: SubmitHandler<FormFieldValues> = async (data) => {
    await registerUserWithEmailAndPassword(data.login, data.password);
    setValue("login", "");
    setValue("password", "");
    if (toggleModal) {
      toggleModal();
    }
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
          {" Sign In!"}
        </Button>

        <Link className={styles.redirect} to={"/signup"}>
          Does't have an accoun yet?
        </Link>
      </div>
      {error && <ErrMessage>{error.message}</ErrMessage>}
    </form>
  );
};
