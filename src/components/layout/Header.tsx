"use client";

import { useState } from "react";
import DropDown from "../modules/DropDown";
import Navbar from "../modules/Navbar";

const Header = () => {
  // =========== State ============
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // =========== Function ============
  const toggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // =========== Rendering ============
  return (
    <header>
      <Navbar toggleHandler={toggleHandler} isMenuOpen={isMenuOpen} />
      <DropDown isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
