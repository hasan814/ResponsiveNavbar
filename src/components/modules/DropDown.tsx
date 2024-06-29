import { DropDownProps } from "@/types";
import Link from "next/link";
import { FC } from "react";

const DropDown: FC<DropDownProps> = ({ isMenuOpen }) => {
  return (
    <div className={`dropdown_menu ${isMenuOpen ? "open" : ""}`}>
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
      <li>
        <Link href={"/"} className="action_btn">
          Get Started
        </Link>
      </li>
    </div>
  );
};

export default DropDown;
