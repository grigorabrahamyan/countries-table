import { EFilterSelect } from "../components/filter-tools/FilterTools.type";
import { ICountriesList } from "../types/server.type";

export const filterActionsConfig = {
  [EFilterSelect.CountryName]:
    (searchInput: string) => (conuntry: ICountriesList) =>
      !searchInput || conuntry.name.common.toLowerCase().includes(searchInput),
  [EFilterSelect.Region]: (searchInput: string) => (conuntry: ICountriesList) =>
    !searchInput || conuntry.region.toLowerCase().includes(searchInput),
};
