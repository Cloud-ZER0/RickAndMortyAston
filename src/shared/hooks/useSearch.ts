import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import { useCallback, useEffect, useState } from "react";
import { setHistory } from "../../api/redux/thunks/history-thunk";
import { selectUid } from "../../api/redux/selectors";
import { onNotifyError } from "../utils/notification";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const uid = useAppSelector(selectUid);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(searchParams.get("name"));
  }, [searchParams]);

  const toggleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const toggleSearch = useCallback(() => {
    if (!searchQuery) {
      onNotifyError();
      return;
    }
    if (uid) {
      dispatch(
        setHistory({
          userId: uid,
          query: searchQuery,
        })
      );
    }
    navigate(`/search?name=${searchQuery}`);
  }, [dispatch, searchQuery, uid, navigate]);

  return { searchQuery, toggleOnChange, toggleSearch };
};

export default useSearch;
