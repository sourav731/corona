import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

function InfoCards(props) {
  return (
    <React.Fragment>
      <CardContent
        className="cardContent"
        style={{
          height: "32vh",
          width: "27vh",
          textAlign: "center",
          backgroundColor: props.backgroundColor,
          borderBottom: "8px solid",
          borderBottomColor: props.colorA,
          borderRadius: "5px",
        }}
      >
        <Typography
          className="titleText"
          style={{ fontSize: "30px", color: props.colorA }}
        >
          {props.title}
        </Typography>
        <Typography
          className="countText"
          style={{ fontSize: "40px", color: props.colorA }}
        >
          <CountUp start={0} end={props.count} duration={2.5} separator="," />
        </Typography>
        <Typography
          className="caseText"
          color="textSecondary"
          style={{ fontSize: "25px" }}
        >
          Cases
        </Typography>
        <Typography
          className="footerText"
          color="textSecondary"
          style={{ fontSize: "15px" }}
        >
          {props.info}
        </Typography>
        <Typography
          className="footerText"
          color="textSecondary"
          style={{ fontSize: "15px" }}
        >
          {props.update}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
}

export default InfoCards;
