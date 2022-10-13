import { Link, Outlet } from "react-router-dom";

export const RootRoute = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};
