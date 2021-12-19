import React from "react";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/Nav/NavBar";
import HomePage from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
