import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Line } from "react-chartjs-2";

const url = "https://covid19.mathdro.id/api/daily";

function HistoricalLineGraph() {
  const [historicData, setHistoricData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);

      const historicData = data.map(
        ({ confirmed, deaths, reportDate: date }) => ({
          confirmed: confirmed.total,
          deaths: deaths.total,
          date,
        })
      );
      setHistoricData(historicData);
    };

    fetchData();
  }, []);

  const lineChart = historicData[0] ? (
    <Line
      data={{
        labels: historicData.map(({ date }) => date),
        datasets: [
          {
            data: historicData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "rgb(237, 214, 123)",
            fill: true,
          },
          {
            data: historicData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgb(204, 30, 73)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingBottom: "4%",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "rgb(137, 134, 134)", paddingBottom: "1%" }}>
        Global Growth graph COVID-19
      </h2>
      {lineChart}
    </div>
  );
}

export default HistoricalLineGraph;
