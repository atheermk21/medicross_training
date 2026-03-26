import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ROUTES } from "../../constants/router";

function NavBar() {
  return (
    <div className="flex gap-x-10 text-[var(--main-text)]">

      nav
      <ul className="flex gap-1.5">
        <li>
            <Link to={ROUTES.HOME}>
            home
            </Link>
        </li>
        <li >
          <Link to={ROUTES.ABOUT}>about</Link>
        </li>
        <li>
          <Link to={ROUTES.DOCTORS}>doctors</Link>
        </li>
      </ul>
      <Button  to="/doctors" children="click" className="bg-amber-400 " variant="primary"/>
    </div>
  );
}

export default NavBar;
