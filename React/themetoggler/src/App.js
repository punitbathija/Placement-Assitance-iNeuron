import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
