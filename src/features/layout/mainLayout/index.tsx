import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import S from "./index.module.scss";
import Header from "../header";

const MainLayout = () => {
  return (
    <div className={S.body}>
      <Navbar />
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
