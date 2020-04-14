import React from "react";
import FrontPage from "./components/Homepage/MainPage/FrontPage";
import InformationCards from "./components/InformationCards/InfoCards/InfoCards";

function App(props) {
  return (
    <React.Fragment>
      <FrontPage />
      <InformationCards />
    </React.Fragment>
  );
}

export default App;
