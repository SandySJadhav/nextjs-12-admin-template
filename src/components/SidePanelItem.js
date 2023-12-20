import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Item = ({ menu }) => {
  if (menu.url) {
    return (
      <Link
        href={menu.url}
        className={classNames("flex w-52", {
          "pl-16": !menu.icon,
        })}
      >
        {menu.icon ? <span className="p-2">{menu.icon}</span> : null}
        <span className="p-2">{menu.label}</span>
      </Link>
    );
  }
  return (
    <a
      className={classNames("flex w-52", {
        "pl-16": !menu.icon,
      })}
    >
      {menu.icon ? <span className="p-2">{menu.icon}</span> : null}
      <span className="p-2">{menu.label}</span>
    </a>
  );
};

const SidePanelItem = ({ menu }) => {
  return (
    <div
      className={classNames("grid justify-items-center", {
        "hover:text-primary cursor-pointer": !menu.items,
      })}
    >
      <Item menu={menu} />
      {menu.items?.map((item) => (
        <SidePanelItem key={item.label} menu={item} />
      ))}
    </div>
  );
};

export default SidePanelItem;
