import React from "react";
import NavBar from "../Navbar/Navbar";
import FrontPage from "../Homepage/HomePageDiv/HomePageDiv";
import InformationCards from "../InformationCards/InfoCards/InfoCards";
import GlobalBarGraph from "../GlobalGraph/GlobalBarGraph";
import HistoricalGlobalGraph from "../GlobalGraph/HistoricalLineGraph";

function GlobalPage(props) {
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

export default GlobalPage;
