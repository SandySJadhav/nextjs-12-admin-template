import React, { useState } from "react";
import {
  HiSun,
  HiMoon,
  HiUser,
  HiOutlineCog,
  HiOutlineMenu,
  HiSearch,
} from "react-icons/hi";
import IconButton from "./IconButton";
import Overlay from "./Overlay";
import Panel from "./Panel";
import UserProfile from "./UserProfile";

const Header = ({ panel, toggleSidePanel }) => {
  const [theme, setTheme] = useState("light");
  const [userPanel, showUserPanel] = useState(false);
  const [settingsPanel, showSettingsPanel] = useState(false);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  const removePanels = () => {
    if (userPanel) {
      showUserPanel(!userPanel);
    } else if (settingsPanel) {
      showSettingsPanel(!settingsPanel);
    }
  };

  const toggleUserPanel = () => {
    showUserPanel(!userPanel);
  };

  const toggleSettingsPanel = () => {
    showSettingsPanel(!settingsPanel);
  };

  return (
    <header className="dark:bg-base p-2 bg-white shadow-md">
      <nav className="flex flex-row justify-between">
        <div className="flex">
          {!panel ? (
            <IconButton onClick={toggleSidePanel}>
              <HiOutlineMenu />
            </IconButton>
          ) : null}

          <div className="grid content-center pl-4">
            <label className="relative flex h-10">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400">
                <HiSearch />
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white dark:bg-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search..."
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <div className="flex">
          <IconButton onClick={toggleTheme} className="mr-1">
            {theme !== "dark" ? (
              <HiMoon className="h-4 w-4 text-primary" />
            ) : (
              <HiSun className="h-4 w-4 text-yellow-500" />
            )}
          </IconButton>
          <IconButton className="mr-1" onClick={toggleSettingsPanel}>
            <HiOutlineCog />
          </IconButton>
          <IconButton className="mr-1" onClick={toggleUserPanel}>
            <HiUser />
          </IconButton>

          {userPanel ? (
            <Panel className="right-2">
              <UserProfile />
            </Panel>
          ) : null}

          {settingsPanel ? (
            <Panel className="right-16">
              <div className="p-4">User Settings</div>
            </Panel>
          ) : null}
        </div>
      </nav>
      {userPanel || settingsPanel ? <Overlay onClick={removePanels} /> : null}
    </header>
  );
};

export default Header;
