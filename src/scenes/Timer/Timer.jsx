import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CountdownTimer from "./components/CountdownTimer";

class Timer extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs>
          <CountdownTimer />
        </Grid>
      </Grid>
    );
  }
}

export default Timer;
