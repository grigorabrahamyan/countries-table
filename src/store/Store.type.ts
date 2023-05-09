import { ReactNode } from "react";
import {
  EFilterSelect,
  ESortSelect,
} from "../components/filter-tools/FilterTools.type";
import { ICountriesList } from "../types/server.type";

export interface IStor {
  filterSelect: EFilterSelect;
  sortSelect: ESortSelect;
  searchInput: string;
  data: ICountriesList[];
  correctData: ICountriesList[];
  setData: (data: ICountriesList[]) => void;
  chnageFilterOptions: (value: EFilterSelect) => void;
  setSortSelect: (value: ESortSelect) => void;
  setSearchInput: (value: string) => void;
}

export interface IProps {
  children: ReactNode;
}
