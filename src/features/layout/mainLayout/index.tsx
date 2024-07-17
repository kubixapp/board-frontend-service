import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import S from "./index.module.scss";

const MainLayout = () => {
  return (
    <div className={S.body}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
