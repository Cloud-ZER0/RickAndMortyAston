import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import { useCallback, useEffect, useState } from "react";
import { setHistory } from "../../api/redux/thunks/history-thunk";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const uid = useAppSelector((store) => store.user.token);
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
      console.log("alert");
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
