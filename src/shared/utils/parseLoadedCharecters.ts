import { Result } from "../../api/types";
import { CharecterCard } from "../components/Card/Card";
const parseLoadedCharecters = (data: Result[] | Result): CharecterCard[] => {
  if (!Array.isArray(data)) {
    return [
      {
        id: data.id,
        name: data.name,
        status: data.status,
        image: data.image,
        location: data.location.name,
        gender: data.gender,
      },
    ];
  }
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
