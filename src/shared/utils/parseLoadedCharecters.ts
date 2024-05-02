// will make type later

import { CharecterCard } from "../components/Card/Card";

const parseLoadedCharecters = (data: any): CharecterCard[] => {
  return data.map((el: any) => ({
    id: el.id,
    name: el.name,
    status: el.status,
    image: el.image,
    location: el.location.name,
    gender: el.gender,
  }));
};

export default parseLoadedCharecters;
