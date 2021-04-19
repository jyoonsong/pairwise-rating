import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

class timer extends React.Component {
  render() {
    const { remainingSeconds, stage } = this.props;

    console.log(this.props)

    const classes = ["timer"];
    if (stage.durationInSeconds - remainingSeconds <= 10) {
      classes.push("lessThan5");
    } else if (stage.durationInSeconds - remainingSeconds <= 20) {
      classes.push("lessThan10");
    }

    return (
      <div className={classes.join(" ")}>
        <h4>Time spent</h4>
        <span className="seconds">{stage.durationInSeconds - remainingSeconds}</span><br/>
        <small>*You should spend at least 20 seconds in each stage.</small>
      </div>
    );
  }
}

export default (Timer = StageTimeWrapper(timer));
