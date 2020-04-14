import React from "react";
import InfoCards from "../Cards/Cards.jsx";
import { Grid } from "@material-ui/core";

function InformationCards(props) {
  return (
    <div style={{ paddingTop: "6%", paddingBottom: "6%" }}>
      <Grid container justify="center">
        <Grid style={{ paddingRight: "80px" }}>
          <InfoCards
            title="Infected"
            count="1213123"
            update="12/03/2019"
            info="Number of active cases of COVID 19"
            colorA="rgba(253, 134, 23, 0.87)"
            backgroundColor="rgba(246, 208, 104, 0.726)"
          />
        </Grid>

        <Grid style={{ paddingRight: "80px" }}>
          <InfoCards
            title="Recovered"
            count="163223"
            update="11/01/2019"
            info="Number of recoveries form COVID 19"
            colorA="rgba(19, 94, 24,0.87)"
            backgroundColor="rgba(51, 221, 110,0.8)"
          />
        </Grid>

        <Grid>
          <InfoCards
            title="Deaths"
            count="123261"
            update="11/01/2019"
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
