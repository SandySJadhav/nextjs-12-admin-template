import classNames from "classnames";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SidePanel from "./SidePanel";

const Layout = ({ children }) => {
  const [panel, showPanel] = useState(true);

  const toggleSidePanel = () => {
    showPanel(!panel);
  };

  return (
    <div className="flex flex-row">
      <SidePanel toggleSidePanel={toggleSidePanel} panel={panel} />
      <div
        className={classNames(
          "flex flex-col grow justify-between min-h-screen bg-white dark:bg-black",
          {
            "sidebar-open": panel,
          },
          {
            "sidebar-close": !panel,
          }
        )}
      >
        <Header toggleSidePanel={toggleSidePanel} panel={panel} />
        <main className="mb-auto m-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
