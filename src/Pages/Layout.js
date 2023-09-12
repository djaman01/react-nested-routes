import { Outlet, Link } from "react-router-dom";
//On met Outlet poiur pouvoir faire apparaite les child routes, vu que le Layout compenent sera le parent route

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
{/* On utilise le component <Outlet /> à la toute fin du parent component qui aura le parent Route, pour ainsi pouvoir faire apparaitre le content des nested routes, sans faire disparaitre le contenu du parent route qui est layout */}
    </>
  )
};

export default Layout;