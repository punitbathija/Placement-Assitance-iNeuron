import React from "react";
import ThemeToggler from "./themeToggler";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <h1 style={{ marginTop: "200px" }}>ThemeToggler</h1>
      <ThemeToggler />
    </header>
  );
};
export default Header;
