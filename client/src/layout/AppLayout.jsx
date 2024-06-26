import { Outlet } from "react-router";
import Header from "../components/header/Header";
import "./app_layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
