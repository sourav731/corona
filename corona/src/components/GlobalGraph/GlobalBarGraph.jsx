import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

const url = "https://api.covid19api.com/summary";

function GlobalBarGraph() {
  const [GlobalData, setGlobalData] = useState({
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { Global },
      } = await axios.get(url);

      setGlobalData(Global);
    };

    fetchData();
  }, []);

  const Data = {
    labels: [
      "New Confirmed",
      "Total Confirmed",
      "NewRecovered",
      "TotalRecovered",
      "NewDeaths",
      "TotalDeaths",
    ],

    datasets: [
      {
        label: "Global",
        backgroundColor: [
          "rgb(229, 198, 119)",
          "rgb(244, 244, 117)",
          "rgb(137, 198, 144)",
          "rgb(65, 150, 46)",
          "rgb(211, 129, 151)",
          "rgb(214, 89, 114)",
        ],
        data: [
          GlobalData.NewConfirmed,
          GlobalData.TotalConfirmed,
          GlobalData.NewRecovered,
          GlobalData.TotalRecovered,
          GlobalData.NewDeaths,
          GlobalData.TotalDeaths,
        ],
      },
    ],
  };

  if (GlobalData.NewConfirmed === 0)
    return (
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <h1>Loading</h1>
      </div>
    );

  return (
    <div
      style={{
        paddingRight: "20%",
        paddingLeft: "20%",
        paddingBottom: "4%",
        textAlign: "center",
      }}
    >
      <Bar
        data={Data}
        width={100}
        height={50}
        options={{
          title: {
            display: true,
            text: "Global Cases",
            fontSize: 30,
            fontColor: "rgb(137, 134, 134)",
            responsive: true,
            maintainAspectRatio: false,
          },
        }}
      />
    </div>
  );
}

export default GlobalBarGraph;
