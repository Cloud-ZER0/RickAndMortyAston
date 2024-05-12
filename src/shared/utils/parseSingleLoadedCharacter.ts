import { Result } from "../../api/types";
import { CharecterCard } from "../components/Card/Card";
const parseSingleLoadedCharecter = (data: Result): CharecterCard => {
  let episodes = null;
  if (Array.isArray(data.episode)) {
    episodes = data.episode.map((ep: string) => ep.split("/").reverse()[0]);
  } else {
    episodes = [data.episode.split("/").reverse()[0]];
  }
  return {
    id: data.id,
    name: data.name,
    status: data.status,
    image: data.image,
    location: data.location.name,
    gender: data.gender,
    episodes: episodes,
  };
};

export default parseSingleLoadedCharecter;
