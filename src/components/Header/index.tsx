import Logo from "../../assets/images/logo-white.svg";
import LogoWhite from "../../assets/images/logo-white.svg";
import Avatar from "../../assets/images/avatar/7.jpg";
import { useHistory } from "react-router";
import tokenManager from "../../utils/tokenManager";
import { useState } from "react";

export const Header = () => {
  const authUser = tokenManager.getUser();
  const history = useHistory();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    tokenManager.removeUser();
    history.push("/");
  };

  return (
    <header className="main-header">
      {/* <!-- Logo --> */}
      <a href="#" className="logo">
        {/* <!-- mini logo --> */}
        <div className="logo-mini">
          <span className="light-logo">
            <img src={Logo} alt="logo" />
          </span>
          <span className="dark-logo">
            <img src="../../assets/images/logo-dark.png" alt="logo" />
          </span>
        </div>
        {/* <!-- logo--> */}
        <div className="logo-lg">
          <span className="light-logo">
            <img src={`${LogoWhite}?q=${Date.now()}`} alt="logo" />
          </span>
          <span className="dark-logo">
            <img src="../../assets/images/logo-dark-text.png" alt="logo" />
          </span>
        </div>
      </a>
      {/* <!-- Header Navbar --> */}
      <nav className="navbar navbar-static-top">
        <div className="app-menu">
          <ul className="header-megamenu nav">
            <a
              href="#"
              aria-haspopup="true"
              data-toggle="dropdown"
              className="waves-effect waves-light nav-link rounded"
              aria-expanded="false"
            >
              <i className="nav-link-icon ti-layout-grid2 text-white mx-5 mx-lg-0"></i>
            </a>
          </ul>
        </div>
        <div className="navbar-custom-menu r-side">

          <ul className="nav navbar-nav">
          <li className="header-user-name" onClick={()=> setShowProfileDropdown(!showProfileDropdown)}>{authUser?.data?.first_name}</li>

            {/* <!-- User Account--> */}
            <li
              className={`dropdown user user-menu ${
                showProfileDropdown && "show"
              }`}
            >
              <a
                href="#"
                className="waves-effect waves-light dropdown-toggle"
                data-toggle="dropdown"
                title="User"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <i className="ti-user"></i>
              </a>
              <ul
                className={`dropdown-menu animated flipInX ${
                  showProfileDropdown && "show"
                }`}
              >
                {/* <!-- User image --> */}
                <li className="user-header bg-img" data-overlay="3">
                  <div className="flexbox align-self-center">
                    <img
                      src={Avatar}
                      className="float-left rounded-circle"
                      alt="User Image"
                    />
                    <h4 className="user-name align-self-center">
                      <span style={{ display: "inline-block" }}>
                        {authUser?.data?.first_name} {authUser?.data?.last_name}
                      </span>
                      <small>{authUser?.data?.email}</small>
                    </h4>
                  </div>
                </li>
                {/* <!-- Menu Body --> */}
                <li className="user-body">
                  <a className="dropdown-item" href="#">
                    <i className="ion ion-person"></i> My Profile
                  </a>

                  <div className="dropdown-divider"></div>

                  <div className="dropdown-divider"></div>
                  <span className="dropdown-item" onClick={handleLogout}>
                    <i className="ion-log-out"></i> Logout
                  </span>
                  <div className="dropdown-divider"></div>
                  <div className="p-10">
                    <a href="#" className="btn btn-sm btn-rounded btn-primary">
                      View Profile
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            {/* <!-- Control Sidebar Toggle Button --> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};
