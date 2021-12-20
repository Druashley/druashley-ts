import React from "react";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/Nav/NavBar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
