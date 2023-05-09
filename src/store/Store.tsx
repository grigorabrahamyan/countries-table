import { createContext, useState, FC, useContext, useMemo } from "react";
import {
  EFilterSelect,
  ESortSelect,
} from "../components/filter-tools/FilterTools.type";
import { IProps, IStor } from "./Store.type";
import { ICountriesList } from "../types/server.type";
import { filterActionsConfig } from "../helpers/filterActionsConfig";

export const StoreContext = createContext<IStor | null>(null);

const StoreProvider: FC<IProps> = ({ children }) => {
  const [filterSelect, setFilterSelect] = useState(EFilterSelect.CountryName);
  const [sortSelect, setSortSelect] = useState(ESortSelect.Population);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<ICountriesList[]>([]);

  const chnageFilterOptions = (value: EFilterSelect) => {
    setFilterSelect(value);
    setSearchInput("");
  };

  const filtered = useMemo(
    () =>
      data.filter(filterActionsConfig[filterSelect](searchInput.toLowerCase())),
    [filterSelect, searchInput, data]
  );

  const sorted = useMemo(
    () => filtered.sort((a, b) => b[sortSelect] - a[sortSelect]),
    [sortSelect, filtered]
  );

  const createdStore: IStor = {
    filterSelect,
    sortSelect,
    searchInput,
    data,
    correctData: sorted,
    setData,
    chnageFilterOptions,
    setSortSelect,
    setSearchInput,
  };

  return (
    <StoreContext.Provider value={createdStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useCustomStore = () => {
  const store = useContext(StoreContext);

  if (!store) throw new Error("You need to wrapp by StoreProvider");

  return store;
};

export default StoreProvider;
