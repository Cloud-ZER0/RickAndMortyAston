import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharecterCard } from "../../../shared/components/Card/Card";
import parseLoadedCharecters from "../../../shared/utils/parseLoadedCharecters";
import parseSingleLoadedCharecter from "../../../shared/utils/parseSingleLoadedCharacter";
import { ResponseType, Result, TransfromedResponse } from "../../types";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PUBLIC_BASE_API }),
  endpoints: (builder) => ({
    getAllCharecters: builder.query<TransfromedResponse, number>({
      query: (page) => `/character/?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.cards.push(...newItems.cards);
        currentCache.hasNextPage = newItems.hasNextPage;
      },
      transformResponse: (response: ResponseType) => {
        return {
          hasNextPage: response.info.next,
          cards: parseLoadedCharecters(response.results),
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getSingleCharacter: builder.query<CharecterCard, string>({
      query: (id) => `/character/${id}`,
      transformResponse: (response: Result) => {
        return parseSingleLoadedCharecter(response);
      },
    }),
    findCharactersByName: builder.query<CharecterCard[], string>({
      query: (name) => `/character/?name=${name}`,
      transformResponse: (response: ResponseType) => {
        return parseLoadedCharecters(response.results);
      },
    }),
    getSeveralCharectersById: builder.query<CharecterCard[], string>({
      query: (ids) => `/character/${ids}`,
      transformResponse: (response: Result[]) => {
        return parseLoadedCharecters(response);
      },
    }),
  }),
});

export const {
  useGetAllCharectersQuery,
  useGetSingleCharacterQuery,
  useFindCharactersByNameQuery,
  useGetSeveralCharectersByIdQuery,
} = cardApi;
