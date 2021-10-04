import { FC } from "react";
import { useHistory, useLocation } from "react-router";
interface cProps {
  pageTitle: string;
  contentRight: string | any;
  breadcrumbName: string;
}
export const ContentHeader: FC<cProps> = (props) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="content-header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-block">
          <h3 className="page-title br-0">{props?.pageTitle}</h3>
          <div className="d-xl-inline-block align-items-center d-none">
            <nav>
              {location.pathname !== "/" && (
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="mdi mdi-home-outline"></i>
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item"
                    aria-current="page"
                    onClick={() => history.push("/")}
                  >
                    Home
                  </li>
                  {props.breadcrumbName && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {props.breadcrumbName}
                    </li>
                  )}
                </ol>
              )}
            </nav>
          </div>
        </div>

        <div>
          {/* take children, whatever the component wants to put here */}
          {props.contentRight}
        </div>
      </div>
    </div>
  );
};
