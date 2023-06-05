import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";
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
          <img src={lightBulbOff} width={"30px"} />
        ) : (
          <img src={lightBulbOn} width={"30px"} />
        )}{" "}
      </p>
    </div>
  );
};

export default ThemeToggler;
