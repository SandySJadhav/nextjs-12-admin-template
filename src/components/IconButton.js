import React from "react";
import classNames from "classnames";

const IconButton = ({
  children,
  rounded = false,
  shadow = false,
  variant,
  className,
  ...props
}) => {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  const danger = variant === "danger";
  const link = variant === "link";

  const buttonClasses = classNames(
    "p-4 dark:text-white text-base",
    "cursor-pointer",
    "font-bold",
    "text-xs",
    "shadow-none",
    "transition",
    "ease-in-out",
    "duration-150",
    {
      "rounded-full": rounded,
    },
    {
      "rounded-lg": !rounded,
    },
    {
      "hover:shadow-lg active:shadow-lg": shadow,
    },
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
      "text-primary dark:bg-base bg-white border-none hover:shadow-none": link,
    },
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
