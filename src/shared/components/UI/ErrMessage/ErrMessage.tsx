import styles from "./ErrMessage.module.scss";
interface IErrMessageProps {
  children: React.ReactNode;
}

export const ErrMessage = ({ children }: IErrMessageProps) => {
  return <span className={styles.msg}>{children}</span>;
};
