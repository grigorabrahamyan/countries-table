import { FC, useEffect, useState } from "react";
import { CustomInput } from "../custom-input";
import { EFilterRegion, EFilterSelect } from "../filter-tools/FilterTools.type";
import { useCustomStore } from "../../store/Store";

const SearchSection: FC = () => {
  const [isSearchDropdown, setIsSearchDropdown] = useState(false);

  const { filterSelect, searchInput, setSearchInput } = useCustomStore();

  const filterRegionData = Object.values(EFilterRegion).filter((region) =>
    region.toLowerCase().includes(searchInput)
  );

  const handleClickDocument = () => {
    setIsSearchDropdown(false);
    document.removeEventListener("click", handleClickDocument, {
      capture: true,
    });
  };

  useEffect(() => {
    if (searchInput.length && filterSelect === EFilterSelect.Region) {
      setIsSearchDropdown(true);
      document.addEventListener("click", handleClickDocument, {
        once: true,
        capture: true,
      });
    } else {
      setIsSearchDropdown(false);
    }
    // eslint-disable-next-line
  }, [filterSelect, searchInput.length]);

  return (
    <div className="search__section">
      <CustomInput value={searchInput} handleChnage={setSearchInput} />
      <div
        className={`search__dropdownWrapper ${isSearchDropdown ? "open" : ""}`}
      >
        <div className="search__dropdown">
          {filterRegionData.map((region, index) => {
            return (
              <option onClick={() => setSearchInput(region)} key={index}>
                {region}
              </option>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
