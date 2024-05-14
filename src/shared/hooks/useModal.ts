import { useCallback, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return { isOpen, onToggleModal };
};

export default useModal;
