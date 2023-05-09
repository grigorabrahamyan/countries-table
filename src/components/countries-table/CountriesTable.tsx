import { FC, Fragment } from "react";
import { IProps } from "./CountriesTable.type";
import { useCustomStore } from "../../store/Store";

const CountriesTable: FC<IProps> = ({ data }) => {
  const { setData } = useCustomStore();

  if (!data.length)
    return <div className="countries__empty">Empty countries list</div>;

  const handleDeleteCoutry = (index: number) => {
    const copyData = [...data];
    copyData.splice(index, 1);
    setData(copyData);
  };

  return (
    <div className="countries__table">
      <div className="countries__table_headTitle">
        <p>Country</p>
      </div>
      <div className="countries__table_headTitle">
        <p>Region</p>
      </div>
      <div className="countries__table_headTitle">
        <p>Population (2023)</p>
      </div>
      <div className="countries__table_headTitle">
        <p>Area</p>
      </div>
      <div className="countries__table_headTitle">
        <p>Flag</p>
      </div>
      <div className="countries__table_headTitle">
        <p></p>
      </div>
      {data.map((country, index) => {
        return (
          <Fragment key={index}>
            <div className="countries__table_item countries__table_firstItem">
              {country.name.common}
            </div>
            <div className="countries__table_item">{country.region}</div>
            <div className="countries__table_item"> {country.population} </div>
            <div className="countries__table_item">{country.area}</div>
            <div className="countries__table_item">
              <div className=" countries__table_flag">
                <img src={country.flags.svg} alt={country.flags.alt} />
              </div>
            </div>
            <div className="countries__table_item countries__table_lastItem">
              <div
                onClick={() => handleDeleteCoutry(index)}
                className="countries__table_close"
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CountriesTable;
