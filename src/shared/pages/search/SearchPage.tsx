import { useSearchParams } from "react-router-dom";
import { Search } from "../../components/UI/Search/Search";
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
      <Search />
      {query ? <SearchList keyword={query} /> : <NothingYet />}
    </section>
  );
};

export default SearchPage;
