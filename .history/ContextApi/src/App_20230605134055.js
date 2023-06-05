import React, { useState } from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./Components/header";
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
