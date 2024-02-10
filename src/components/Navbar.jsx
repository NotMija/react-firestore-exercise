import { navbar } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div>
      <Link to="/">home</Link>
        <Link to="/songs">Canciones</Link>
        <Link to="/create-song">Añadir cancion</Link>
      </div>
      <Outlet />
    </>
  );
}

export default navBar;