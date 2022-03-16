import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { IOption } from "../interfaces/IQuestionnaireWizard";
// import RightTickIcon from "../icons/RightTickIcon";
// import TailLessRightArrow from "../icons/TaillessRightArrow";
import styles from "./CustomAutoComplete.module.scss";

interface ICustomAutoComplete {
  data: IOption[] | [];
  handleSelection?: any;
  selected?: Record<any, any>[];
  type: string;
  update: any;
  placeholder: string;
}

const CustomAutoComplete = ({
  data = [],
  handleSelection,
  selected = [],
  type,
  update,
  placeholder,
}: ICustomAutoComplete) => {
  const [selectedOptions, setSelected] = useState<string[]>([
    ...(selected as []),
  ]);
  const [filteredOptions, setFilteredOptions] = useState([...data]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // const handleOptionSelection = () => {
  //   if (handleSelection) {
  //     handleSelection(type, value as IOption, true);
  //     return;
  //   }
  //   let updatedSelcted = [...selectedOptions];

  //   // if (updatedSelcted.includes(value as string)) {
  //   //   updatedSelcted = updatedSelcted.filter((item) => item !== value);
  //   // } else {
  //   //   updatedSelcted.push(value as string);
  //   // }

  //   // setSelected(updatedSelcted);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;

    let updateOptions = [...data];

    if (!value) updateOptions = [...data];

    if (value) {
      updateOptions = updateOptions.filter((option) =>
        option.value.toLowerCase().includes(value.toLowerCase())
      );
    }

    console.log(updateOptions);

    setFilteredOptions(updateOptions);
  };

  const handleDropdown = (open: boolean) => {
    setIsDropDownOpen(open);
  };

  useEffect(() => {
    const mobileDropdown = document.querySelector(
      `.options-outer-container-${type}`
    );
    const searchInputContainer = document.querySelector(
      `.search-input-container-${type}`
    );
    document.addEventListener("click", (e) => {
      if (
        !mobileDropdown?.contains(e.target as Node) &&
        !searchInputContainer?.contains(e.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    });
  }, [type]);

  // useEffect(() => {
  //   let updatedOptions = [...data];

  //   updatedOptions = updatedOptions.map((item) => {
  //     for (let s of selected) {
  //       if (item.value === s.value && s.selected) {
  //         return {
  //           ...item,
  //           selected: true,
  //         };
  //       } else if (item.value === s.value && !s.selected) {
  //         return {
  //           ...item,
  //           selected: false,
  //         };
  //       }
  //     }
  //     return item;
  //   });

  //   setFilteredOptions([...updatedOptions]);
  // }, []);

  return (
    <div className={`${styles.auto_complete_container} `}>
      <div
        className={`search-input-container-${type} ${styles.input_container}`}
      >
        <input
          id="custom-search-input"
          className={`search-input ${styles.input}`}
          onChange={handleInputChange}
          placeholder={placeholder}
          onClick={() => handleDropdown(true)}
        />
        <span className={styles.caret}>
          <Search />
        </span>
      </div>
      <div
        className={`options-outer-container-${type} ${
          styles.options_outer_container
        } ${isDropDownOpen ? styles.open : ""}`}
      >
        <ul className={`${styles.options_container} `}>
          {filteredOptions.map((option, idx) => (
            <li
              key={idx}
              className={`${styles.option}`}
              onClick={() => {
                handleSelection(type, option);
                setIsDropDownOpen(false);
              }}
            >
              <span className={`font-400 ${styles.option_label}`}>
                {option.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomAutoComplete;
