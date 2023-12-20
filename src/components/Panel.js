import classNames from "classnames";
import React from "react";

const Panel = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "absolute z-20 p-4 mt-16 w-52 origin-top-right rounded-md bg-white dark:bg-base py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Panel;
