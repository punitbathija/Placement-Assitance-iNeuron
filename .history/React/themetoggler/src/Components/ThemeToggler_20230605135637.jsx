import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import lightBulbOff from "./off.png";
import lightBulbOn from "./on.png";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <p>
        {themeMode === "light" ? (
          <img src={lightBulbOff} width={"30px"} alt="switch" />
        ) : (
          <img src={lightBulbOn} width={"30px"} alt="switch" />
        )}{" "}
      </p>
    </div>
  );
};

export default ThemeToggler;
