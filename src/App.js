import React from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <HeroPage />
    </div>
  );
};

export default App;
