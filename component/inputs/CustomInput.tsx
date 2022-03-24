import React from "react";
import styles from "./styles/CustomInput.module.scss";

interface ICustomInput {
  onChange: any;
  value: any;
  helperText?: string;
  error?: boolean;
  label?: string;
  name: string;
  type: string;
  placeholder: string;
}

const CustomInput = ({
  onChange,
  value,
  helperText = "",
  error,
  label = "",
  name,
  placeholder,
  type,
}: ICustomInput) => {
  return (
    <div className={styles.contain_input}>
      <label htmlFor={name} className="font-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`font-400 ${styles.input}`}
        autoComplete="off"
      />
      <div
        className={`font-400 ${styles.helper_text} ${
          error ? "" : styles.display_none
        }`}
      >
        {helperText}
      </div>
    </div>
  );
};

export default CustomInput;
