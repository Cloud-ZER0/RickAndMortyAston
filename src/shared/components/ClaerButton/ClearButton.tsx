import clsx from "clsx";
import styles from "./ClearButton.module.scss";

interface ClearButtonProps {
  onClearAction: () => void;
  isVisible?: boolean;
  placeHolder?: string;
}

export const ClearButton = ({
  onClearAction,
  isVisible,
  placeHolder = "Clear",
}: ClearButtonProps) => {
  return (
    <button
      className={clsx(styles.clearBtn, isVisible ? styles.visible : "")}
      onClick={onClearAction}
    >
      {placeHolder}
    </button>
  );
};
