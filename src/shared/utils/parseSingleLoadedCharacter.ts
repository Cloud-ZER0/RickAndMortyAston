import { Result } from "../../api/redux/api/card-api";
import { CharecterCard } from "../components/Card/Card";
const parseSingleLoadedCharecter = (data: Result): CharecterCard => {
  return {
    id: data.id,
    name: data.name,
    status: data.status,
    image: data.image,
    location: data.location.name,
    gender: data.gender,
  };
};

export default parseSingleLoadedCharecter;
