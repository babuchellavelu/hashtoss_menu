import React from "react";
import { MenuList, submenu_latest, submenu_tech } from "./MenuList";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar({ clicked, handleSetClick }) {
  // const [clicked, setClicked] = useState(false);

  //const [submenulist, setSubMenuList] = useState("list_submenu_news");
  // function handleSetClick() {
  //   setClicked(!clicked);
  // }

  // function handleSubMenuList(submenu_name) {
  //   if (submenu_name === "submenu_news") {
  //     setSubMenuList("list_submenu_news");
  //   } else if (submenu_name === "submenu_features") {
  //     setSubMenuList("list_submenu_features");
  //   }
  // }

  const list_submenu_latest = submenu_latest.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const list_submenu_tech = submenu_tech.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const menuList = MenuList.map(
    ({ url, title, hassubmenu, submenu_name }, index) => {
      if (hassubmenu === 1) {
        return (
          <li key={index}>
            <NavLink exact to={url} activeClassName="active">
              {title}
            </NavLink>
            <i className="fa fa-sort-desc"></i>
            <ul className="submenu-list">{eval(submenu_name)}</ul>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <NavLink exact to={url} activeClassName="active">
              {title}
            </NavLink>
          </li>
        );
      }
    }
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header_left">
          <div className="nav_icon" onClick={handleSetClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div className="nav-logo">
            <img src="/images/hashtoss.png" alt="logo" />
          </div>
        </div>
        <div className="header_mid">
          <nav className={clicked ? "main_nav" : "main_nav close"}>
            <ul>{menuList}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
