import { useSearchParams } from "react-router-dom";

import { SearchList } from "../../components/SearchList/SearchList";
import { NothingYet } from "../../components/NothingYet/NothingYet";

const useSearchParamsHook = (): string | null => {
  const [searchParams] = useSearchParams();
  return searchParams.get("name");
};

const SearchPage = () => {
  const query = useSearchParamsHook();

  return (
    <section className="section">
      {query ? (
        <SearchList keyword={query} />
      ) : (
        <NothingYet isLoading={false} />
      )}
    </section>
  );
};

export default SearchPage;
