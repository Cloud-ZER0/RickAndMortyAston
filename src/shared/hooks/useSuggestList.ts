import { useCallback, useState } from "react";

const useSuggestList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onInputFocused = useCallback(() => {
    setIsVisible(true);
  }, []);
  const onInputBlured = useCallback(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  }, []);

  return { isVisible, onInputBlured, onInputFocused };
};

export default useSuggestList;
