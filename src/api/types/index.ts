import {
  CharecterCard,
  Gender,
  Status,
} from "../../shared/components/Card/Card";

export interface Location {
  name: string;
  url: string;
}

export interface Origin {
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

export interface ResponseType {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Result[];
}

export interface TransfromedResponse {
  hasNextPage: String | null;
  cards: CharecterCard[];
}
