import { TiThMenuOutline } from "react-icons/ti";
import { NavbarProps } from "@/types";
import { FC } from "react";

import Link from "next/link";

const Navbar: FC<NavbarProps> = ({ toggleHandler, isMenuOpen }) => {
  // =========== Renderin ============
  return (
    <div className="navbar">
      <div className="logo">
        <Link href={"/"}>Web Dev Creative</Link>{" "}
      </div>
      <ul className={`links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link href={"/hero"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Link href={"/"} className="action_btn">
        Get Start
      </Link>
      <div className="toggle_btn" onClick={toggleHandler}>
        <TiThMenuOutline />
      </div>
    </div>
  );
};

export default Navbar;
