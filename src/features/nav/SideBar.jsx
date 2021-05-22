import React, { useState } from "react";
import { MenuList, submenu_latest, submenu_tech } from "./MenuList";
import { NavLink } from "react-router-dom";

import "./SideBar.css";
import "../../app/layout/styles.css";

export default function SideBar({ clicked, handleSetClick }) {
  //   const [clicked, setClicked] = useState(false);

  //   function handleSetClick() {
  //     setClicked(!clicked);
  //   }
  const list_submenu_latest = submenu_latest.map(({ url, title }, index) => {
    return (
      <NavLink exact to={url} activeClassName="active">
        {title}
      </NavLink>
    );
  });

  const list_submenu_tech = submenu_tech.map(({ url, title }, index) => {
    return (
      <NavLink exact to={url} activeClassName="active">
        {title}
      </NavLink>
    );
  });
  const menuList = MenuList.map(
    ({ url, title, hassubmenu, submenu_name }, index) => {
      if (hassubmenu === 1) {
        return (
          <nav class="drop-down-menu">
            <input
              type="checkbox"
              class="activate"
              id={"accord_" + submenu_name}
              name={"accord_" + submenu_name}
            />
            <label for={"accord_" + submenu_name} class="menu-title">
              {title}<i className="fa fa-sort-desc"></i>
            </label>
            
            <div class="drop-down">{eval(submenu_name)}</div>
          </nav>
        );
      } else {
        return (
          <NavLink exact to={url} activeClassName="active">
            {title}
          </NavLink>
        );
      }
    }
  );

  return (
    <nav className={clicked ? "side_nav" : "side_nav close"}>{menuList}</nav>
  );
}
