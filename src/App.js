import React from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroPage />
    </div>
  );
};

export default App;
