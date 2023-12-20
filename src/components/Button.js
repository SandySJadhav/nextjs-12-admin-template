import classNames from "classnames";
import React from "react";

const Button = ({ children, className, variant, ...props }) => {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  const danger = variant === "danger";
  const link = variant === "link";

  const buttonClasses = classNames(
    "min-w-[128px]",
    "uppercase",
    "cursor-pointer",
    "font-bold",
    "text-xs",
    "rounded-lg",
    "shadow-none hover:shadow-lg active:shadow-lg",
    "transition",
    "ease-in-out",
    "duration-150",
    "p-4",
    {
      "bg-primary text-white": primary,
    },
    {
      "bg-white text-primary border": secondary,
    },
    {
      "bg-danger text-white": danger,
    },
    {
      "text-primary dark:bg-base bg-white border-none hover:shadow-none hover:underline":
        link,
    },
    className
  );
  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
