import React from "react";
import { CharecterCard } from "../components/Card/Card";
import parseLoadedCharecters from "../utils/parseLoadedCharecters";

export default function useFetchCharecters() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [charecters, setCharecters] = React.useState<CharecterCard[]>([]);
  const [nextPage, setNextPage] = React.useState<string | null>(null);

  const fetchMore = React.useCallback(async () => {
    setLoading(true);
    if (nextPage) {
      await fetch(nextPage)
        .then(async (resp) => {
          if (resp.ok) {
            return await resp.json();
          } else {
            throw Error("Oops...something went wrong");
          }
        })
        .then((data: any) => {
          setCharecters((old) => {
            if (old) {
              return [...old, ...parseLoadedCharecters(data.results)];
            } else return parseLoadedCharecters(data.results);
          });
          setNextPage(data.info.next);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [nextPage]);

  const fetchCharecters = React.useCallback(async () => {
    setLoading(true);
    await fetch("https://rickandmortyapi.com/api/character")
      .then(async (resp) => {
        if (resp.ok) {
          return await resp.json();
        } else {
          throw Error("Oops...something went wrong");
        }
      })
      .then((data: any) => {
        setCharecters(parseLoadedCharecters(data.results));
        setNextPage(data.info.next);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetchCharecters();
  }, [fetchCharecters]);

  return { charecters, loading, error, nextPage, fetchMore };
}
