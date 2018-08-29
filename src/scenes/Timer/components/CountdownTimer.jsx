import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Countdown from "react-countdown-now";
import ReactFitText from "react-fittext";

const styles = {
  timer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

class CountdownTimer extends React.Component {
  timer = null;
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      timeLeft: 300000,
      totalTime: 300000
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>You are good to go!</span>;
    } else {
      if (minutes >= 10) {
        return (
          <Typography align="center">
            {hours}:{minutes}
          </Typography>
        );
      } else {
        return (
          <Typography align="center">
            {hours}:{minutes}:{seconds}
          </Typography>
        );
      }
    }
  };

  // Pass this function in ?
  progress = () => {
    const { timeLeft, totalTime } = this.state;
    const newTimeLeft = timeLeft - 1000;

    const completed = 100 * ((totalTime - newTimeLeft) / totalTime);

    if (completed === 100) {
      // Here we should call a callback to get a new pair (totaltime)
      this.setState({ timeLeft: totalTime, completed: 0 });
    } else {
      this.setState({ timeLeft: newTimeLeft, completed: completed });
    }
  };

  render() {
    const { classes } = this.props;
    const { timeLeft, completed } = this.state;
    return (
      <Card className={classes.timer}>
        <ReactFitText compressor={0.5}>
          <Countdown
            date={timeLeft}
            renderer={this.renderer}
            controlled={true}
          />
        </ReactFitText>
        <LinearProgress variant="determinate" value={completed} />
      </Card>
    );
  }
}

CountdownTimer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CountdownTimer);
