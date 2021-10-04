import { FC } from "react";
import { ContentHeader } from "./ContentHeader";
interface mProps {
  pageTitle: string;
  contentRight: string | any;
  breadcrumbName: string;
}
export const MainContent: FC<mProps> = (props) => {
  const { breadcrumbName } = props;
  return (
    <section className="content">
      {/* <!-- Content Header (Page header) --> */}
      <ContentHeader
        pageTitle={props?.pageTitle}
        contentRight={props.contentRight}
        breadcrumbName={breadcrumbName}
      />
      {/* main content */}
      {props.children}
    </section>
  );
};
