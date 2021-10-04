import React from "react";

export const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="pull-right d-none d-sm-inline-block">
        <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
       
        </ul>
      </div>
      &copy; {new Date().getFullYear()} &nbsp;
      CIP. 
      All Rights Reserved.
    </footer>
  );
};
