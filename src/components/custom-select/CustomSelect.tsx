import { FC, useState } from "react";
import { IProps } from "./CustomSelect.type";

const CustomSelect: FC<IProps> = ({ options = [], value, onClickOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDocumentClick = () => {
    document.removeEventListener("click", handleDocumentClick, {
      capture: true,
    });
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    document.addEventListener("click", handleDocumentClick, {
      once: true,
      capture: true,
    });
    setIsOpen(true);
  };

  return (
    <div className={`custom__select`}>
      <div className="custom__select_arrow" />
      <input
        type="text"
        onClick={handleSelectClick}
        readOnly
        value={`Sort by ${value}`}
      />
      <div className={`custom__select_options ${isOpen ? "open" : ""}`}>
        {options.map((option, index) => {
          return (
            <option
              onClick={() => {
                onClickOption(option);
              }}
              key={index}
            >
              Sort by {option}
            </option>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelect;
