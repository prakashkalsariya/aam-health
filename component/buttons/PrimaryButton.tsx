import React, { ReactNode } from "react";
import styles from "./PrimaryButton.module.scss";

export type ButtonColorType = "primary" | "secondary";

interface IPrimaryButton {
  children: ReactNode;
  fixedWidth?: boolean;
  fullWidth?: boolean;
  width?: number;
  className?: string;
  color?: ButtonColorType;
  outlined?: boolean;
  height?: number;
  buttonProps?: any;
  onClick?: () => void;
}

const PrimaryButton = ({
  children,
  fixedWidth = false,
  fullWidth = false,
  width,
  className = "",
  color,
  outlined = false,
  height,
  buttonProps = {},
  onClick = () => {},
}: IPrimaryButton) => {
  return (
    <button
      className={`${className} ${styles.button} ${
        fullWidth ? styles.fullWidth : ""
      }  ${color === "secondary" ? styles.secondaryColor : ""}
      ${outlined ? styles.outlinedButton : ""}`}
      style={{
        width: fixedWidth ? width : "auto",
        height: fixedWidth ? height : "auto",
      }}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
