import { NavLink, useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";

import "./style.scss";

export const NotFound = () => {
  const history = useHistory();
  return (
    <div className="not-found-container">
      <div className="row align-items-center justify-content-md-center h-p100">
        <div className="col-lg-4 col-12 h-lg-p100 h-auto bg-gradient-blueindigo-dark depth-4">
          <div className="row l-block p-xl-100 p-lg-50 p-30 h-lg-p100 h-auto">
            <div className="col-12 logo align-self-start">
              <span onClick={() => history.push("/")} className="aut-logo">
                <img src={Logo} alt="logo" />
              </span>
            </div>
            <div className="col-12 align-self-center">
              <h1 className="title text-white">Welcome to AFRIFEX</h1>
              <h3 className="subtitle text-white-50">
                Pay bills from the comfort of your home. Airtime Vending &amp;
                Universal PIN Services
              </h3>
            </div>
            <div className="col-12 align-self-end">
              <h6 className="text-white-50">
                &copy; {new Date().getFullYear()} &nbsp; AFRIFEX
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row justify-content-center no-gutters">
            <div className="col-xl-6 col-lg-7 col-md-6 col-12">
              <div>
                <h1 className="text-white font-size-180 font-weight-bold mb-0 t-depth-5">
                  {" "}
                  400
                </h1>
                <h1 className="text-white">Uh-Ah</h1>
                <h3 className="text-white">
                  The content you are trying to access does not exist
                </h3>
                <div className="my-30">
                  <NavLink to="/" className="btn btn-info">
                    Back to Rates
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
