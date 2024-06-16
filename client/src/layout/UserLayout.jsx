import { NavLink, Outlet } from "react-router-dom";
import "./user_layout.scss";

const UserLayout = () => {
  return (
    <>
      <section className="side-nav">
        <aside>
          <nav>
            <ul>
              <li>
                <NavLink to={"profile"}>Profile</NavLink>
              </li>
              <li>
                <NavLink to={"lendings"}>Lendings</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </section>

      <section className="main-content">
        <Outlet />
      </section>
    </>
  );
};

export default UserLayout;
