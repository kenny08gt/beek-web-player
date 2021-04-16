import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left flex mx-3">
        <img
          src="https://beek.io/los-mejores-libros-para-leer-recomendados-mas-vendidos.svg"
          className="w-20"
          alt="Los Mejores Libros Para Leer (Recomendados, Más Vendidos)"
        />{" "}
      </div>
      <div className="search-bar flex">
        <SearchIcon />
        <input type="search" placeholder="Search" />
      </div>
      <div className="float-right mx-3" style={{ color: "#6fe2e6" }}>
        <img
          className="w-6"
          src="https://beek.io/design_system/user-icon.svg"
          alt="User profile"
        />
        {/* <AccountCircleIcon color="inherit" /> */}
      </div>
    </div>
  );
};
