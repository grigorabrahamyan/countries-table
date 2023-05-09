import { ESortSelect } from "../components/filter-tools/FilterTools.type";

export interface ICountriesList {
  name: {
    common: string;
  };
  region: string;
  [ESortSelect.Population]: number;
  [ESortSelect.Area]: number;
  flags: {
    svg: string;
    alt: string;
  };
}
