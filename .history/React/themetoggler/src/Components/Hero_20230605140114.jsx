import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../colors";

const Hero = () => {
  const theme = useContext(ThemeContext)[0];
  const CurrentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${CurrentTheme.backgroundColor}`,
        color: `${CurrentTheme.textColor}`,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1>Context API Theme Theme Toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${CurrentTheme.border}`,
        }}
      >
        Static Button
      </button>
    </div>
  );
};

export default Hero;
