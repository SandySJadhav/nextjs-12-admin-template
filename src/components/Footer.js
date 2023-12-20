import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="dark:bg-base bg-secondary p-4 flex items-center justify-between shadow">
      <div>
        Copyright{" "}
        <a
          className="text-primary"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/sandysjadhav/"
        >
          ©SandySJadhav
        </a>
      </div>
      <div className="flex">
        <div className="flex">
          <HiOutlineMail className="h-6 w-6 dark:text-danger" />
        </div>

        <div className="flex pl-1">
          <a
            href="mailto:jadhavsandipsh@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            jadhavsandipsh@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
