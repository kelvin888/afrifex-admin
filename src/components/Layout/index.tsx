import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ArtBg } from "../ArtBg";
import { Header } from "../Header";
import { MainContent } from "../MainContent";
import { MainSidebar } from "../MainSidebar";
interface lProps {
  pageTitle: string;
  contentRight: string | any;
  breadcrumbName: string;
}
export const Layout: FC<lProps> = (props) => {
  const { breadcrumbName } = props;
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <ArtBg />
      <Header />
      <div className="content-wrapper">
        <div className="container-full clearfix position-relative">
          <MainSidebar />
          <MainContent
            pageTitle={props.pageTitle}
            contentRight={props?.contentRight}
            breadcrumbName={breadcrumbName}
          >
            {props.children}
          </MainContent>
        </div>
      </div>
      <div className="control-sidebar-bg"></div>
    </div>
  );
};
