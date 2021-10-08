import { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import tokenManager from "../../utils/tokenManager";

export const MainSidebar = () => {
  const location = useLocation();

  return (
    <aside className="main-sidebar">
      {/* <!-- sidebar--> */}
      <section className="sidebar">
        {/* <!-- sidebar menu--> */}
        <ul className="sidebar-menu tree" data-widget="tree">
          <li className={`${location.pathname === "/" ? "active" : ""}`}>
            <NavLink to="/">
              <i className="mdi mdi-minus-network"></i>
              <span>Rates</span>
            </NavLink>
          </li>
          <li
            className={`${location.pathname === "/currencies" ? "active" : ""}`}
          >
            <NavLink to="/currencies">
              <i className="mdi mdi-minus-network"></i>
              <span>Currencies</span>
            </NavLink>
          </li>
          <li
            className={`${
              location.pathname === "/fx-market-locations" ? "active" : ""
            }`}
          >
            <NavLink to="/fx-market-locations">
              <i className="mdi mdi-minus-network"></i>
              <span>FX Mkt Locations</span>
            </NavLink>
          </li>
          <li
            className={`${
              location.pathname === "/states" ? "active" : ""
            }`}
          >
            <NavLink to="/states">
              <i className="mdi mdi-minus-network"></i>
              <span>States</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};
