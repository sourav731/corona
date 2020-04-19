import React from "react";
import NavBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./components/Homepage/MainPage/FrontPage";
import InformationCards from "./components/InformationCards/InfoCards/InfoCards";
import GlobalBarGraph from "./components/GlobalGraph/GlobalBarGraph";
import HistoricalGlobalGraph from "./components/GlobalGraph/HistoricalLineGraph";

function App(props) {
  return (
    <div style={{ backgroundColor: "#F0F8FF" }}>
      <NavBar />
      <FrontPage />
      <InformationCards />
      <GlobalBarGraph />
      <HistoricalGlobalGraph />
    </div>
  );
}

export default App;
