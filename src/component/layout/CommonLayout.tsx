import { Outlet } from "react-router-dom";
import Header from "../shared/Header";



const CommonLayout = () => {
  return (
  <div className="common__layout__container  dark:bg-dark">
    <Header/>
    <Outlet/>
  </div>
  );
};

export default CommonLayout;
