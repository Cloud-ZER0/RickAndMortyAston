import * as Dialog from "@radix-ui/react-dialog";
import { SignInForm } from "../Form/SignInForm/SignInForm";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal = ({ isOpen, toggleModal }: ModalProps) => (
  <Dialog.Root open={isOpen} onOpenChange={toggleModal}>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <SignInForm toggleModal={toggleModal} />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
