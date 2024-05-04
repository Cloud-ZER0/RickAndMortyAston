import { Result } from "../../api/redux/api/card-api";
import { CharecterCard } from "../components/Card/Card";
const parseLoadedCharecters = (data: Result[]): CharecterCard[] => {
  return data.map((el) => ({
    id: el.id,
    name: el.name,
    status: el.status,
    image: el.image,
    location: el.location.name,
    gender: el.gender,
  }));
};

export default parseLoadedCharecters;
