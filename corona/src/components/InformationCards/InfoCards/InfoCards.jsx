import React, { useState } from "react";
import InfoCards from "../Cards/Cards.jsx";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const url = "https://api.covid19api.com/summary";

function InformationCards(props) {
  const [globalData, setGlobalData] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { Global },
      } = await axios.get(url);

      const modifiedData = {
        confirmed: Global.TotalConfirmed,
        recovered: Global.TotalRecovered,
        deaths: Global.TotalDeaths,
      };

      setGlobalData(modifiedData);
    };

    fetchData();
  }, []);

  if (globalData.confirmed === 0)
    return (
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <h1>Loading</h1>
      </div>
    );

  return (
    <div style={{ paddingTop: "6%", paddingBottom: "6%" }}>
      <Grid container justify="center">
        <Grid style={{ paddingRight: "80px" }}>
          <InfoCards
            title="Infected"
            count={globalData.confirmed}
            update={new Date().toISOString().slice(0, 10)}
            info="Number of active cases of COVID 19"
            colorA="rgba(253, 134, 23, 0.87)"
            backgroundColor="rgba(246, 208, 104, 0.726)"
          />
        </Grid>

        <Grid style={{ paddingRight: "80px" }}>
          <InfoCards
            title="Recovered"
            count={globalData.recovered}
            update={new Date().toISOString().slice(0, 10)}
            info="Number of recoveries form COVID 19"
            colorA="rgba(19, 94, 24,0.87)"
            backgroundColor="rgba(51, 221, 110,0.8)"
          />
        </Grid>

        <Grid>
          <InfoCards
            title="Deaths"
            count={globalData.deaths}
            update={new Date().toISOString().slice(0, 10)}
            info="Number of deaths form COVID 19"
            colorA="rgba(219, 74, 74,0.87)"
            backgroundColor="rgba(237, 175, 175,0.76)"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default InformationCards;
