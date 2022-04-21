import { ReactNode } from "react";
import Navigation from "components/Navigation/Navigation";
// import styles from "./MainTemplate.module.scss";

const MainTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainTemplate;
