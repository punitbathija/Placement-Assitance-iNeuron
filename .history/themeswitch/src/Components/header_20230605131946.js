import React from "react";
import ThemeToggler from "./themeToggler";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <h1>ThemeToggler</h1>
      <ThemeToggler />
    </header>
  );
};
export default Header;
