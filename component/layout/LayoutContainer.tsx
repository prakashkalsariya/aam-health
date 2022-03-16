import React from "react";
import styles from "./LayoutContainer.module.scss";

interface ILayoutContainer {
  children: any;
  className?: string;
}

const LayoutContainer = ({ children, className = "" }: ILayoutContainer) => {
  return (
    <div className={`${styles.layout_container} ${className}`}>{children}</div>
  );
};

export default LayoutContainer;
