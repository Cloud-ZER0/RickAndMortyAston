import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CharecterCard,
  Gender,
  Status,
} from "../../../shared/components/Card/Card";
import parseLoadedCharecters from "../../../shared/utils/parseLoadedCharecters";
import parseSingleLoadedCharecter from "../../../shared/utils/parseSingleLoadedCharacter";

interface Location {
  name: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}

export interface Result {
  createdAt: string;
  episode: string[] | string;
  gender: Gender;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: Status;
  type: string;
  url: string;
}

interface ResponseType {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Result[];
}

interface TransfromedResponse {
  hasNextPage: String | null;
  cards: CharecterCard[];
}

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
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
    getSingleCharacter: builder.query<CharecterCard, number>({
      query: (id) => `/character/${id}`,
      transformResponse: (response: Result) => {
        return parseSingleLoadedCharecter(response);
      },
    }),
    findCharactersByName: builder.query<CharecterCard, String>({
      query: (name) => `/character/?name=${name}}`,
      transformResponse: (response: Result) => {
        return parseSingleLoadedCharecter(response);
      },
    }),
  }),
});

export const {
  useGetAllCharectersQuery,
  useGetSingleCharacterQuery,
  useFindCharactersByNameQuery,
} = cardApi;
