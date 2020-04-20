import React from "react";
import IndiaCard from "../IndiaCard/IndiaCard";
import NavBar from "../Navbar/Navbar";

function IndiaPage() {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "rgb(153, 159, 163)", paddingTop: "3%" }}>
          COVID 19 DATA FOR INDIA
        </h1>
        <IndiaCard />
      </div>
    </div>
  );
}

export default IndiaPage;
