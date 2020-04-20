import React, { useEffect, useState } from "react";
import { CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import axios from "axios";

const url = "https://api.rootnet.in/covid19-in/stats/latest";

function InfoCards(props) {
  const [IndiaData, setIndiaData] = useState({
    infected: 0,
    recovered: 0,
    deaths: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          data: { summary },
        },
      } = await axios.get(url);

      const modifiedData = {
        infected: summary.total,
        recovered: summary.discharged,
        deaths: summary.deaths,
      };

      setIndiaData(modifiedData);
      console.log(summary);
    };

    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: "4%", paddingLeft: "30%" }}>
      <CardContent
        className="cardContent"
        style={{
          height: "60vh",
          width: "80vh",
          padding: "0%",
          textAlign: "center",
          backgroundColor: "rgb(239, 247, 252)",
          borderBottom: "8px solid",
          borderBottomColor: "rgb(118, 120, 122)",
          borderRadius: "5px",
        }}
      >
        <Typography
          className="titleText"
          style={{
            fontSize: "60px",
            color: "white",
            backgroundColor: "rgb(118, 120, 122)",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          INDIA
        </Typography>
        <br />
        <Typography
          className="countText"
          style={{ fontSize: "40px", color: "rgb(118, 120, 122)" }}
        >
          <span style={{ color: "rgb(226, 166, 93)" }}>Infected : </span>
          <CountUp
            start={0}
            end={IndiaData.infected}
            duration={2.5}
            separator=","
          />
        </Typography>

        <Typography
          className="countText"
          style={{ fontSize: "40px", color: "rgb(118, 120, 122)" }}
        >
          <span style={{ color: "rgb(108, 201, 135)" }}>Recovered : </span>
          <CountUp
            start={0}
            end={IndiaData.recovered}
            duration={2.5}
            separator=","
          />
        </Typography>

        <Typography
          className="countText"
          style={{ fontSize: "40px", color: "rgb(118, 120, 122)" }}
        >
          <span style={{ color: "rgb(224, 51, 91)" }}>Death : </span>
          <CountUp
            start={0}
            end={IndiaData.deaths}
            duration={2.5}
            separator=","
          />
        </Typography>
        <br />
        <Typography
          className="titleText"
          style={{
            fontSize: "20px",
            color: "rgb(118, 120, 122)",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Updated on : {new Date().toISOString().slice(0, 10)}
        </Typography>
      </CardContent>
    </div>
  );
}

export default InfoCards;
