"use client";
import React from "react";
import { ThemeDropDown } from "../ThemeDropDown/ThemeDropDown";
import SearchDialog from "../SearchDialog/SearchDialog";

const Navbar = () => {

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
