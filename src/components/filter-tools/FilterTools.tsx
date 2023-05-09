import { CustomSelect } from "../custom-select";
import { EFilterSelect, ESortSelect } from "./FilterTools.type";
import { SearchSection } from "../search-section";
import { useCustomStore } from "../../store/Store";

const FilterTools = () => {
  const { filterSelect, sortSelect, chnageFilterOptions, setSortSelect } =
    useCustomStore();

  return (
    <div className="filter">
      <p>Filter</p>
      <div className="filter__tools">
        <div className="filter__filterInputs">
          <div className="filter__searchInput filter__commnInputs">
            <SearchSection />
          </div>
          <div className="filter__filterSelect filter__commnInputs">
            <CustomSelect
              options={Object.values(EFilterSelect)}
              value={filterSelect}
              onClickOption={chnageFilterOptions}
            />
          </div>
        </div>
        <div className="filter__sortSelect">
          <div className="filter__filterSelect filter__commnInputs">
            <CustomSelect
              options={Object.values(ESortSelect)}
              value={sortSelect}
              onClickOption={setSortSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTools;
