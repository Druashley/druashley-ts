import React from "react";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/Nav/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
    </div>
  );
};

export default App;
