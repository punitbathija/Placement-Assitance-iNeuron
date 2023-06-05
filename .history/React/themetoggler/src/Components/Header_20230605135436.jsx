import React from "react";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <h1 style={{ marginTop: "12px" }}>ThemeToggler</h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
