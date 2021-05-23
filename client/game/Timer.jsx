import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

class timer extends React.Component {
  render() {
    const { remainingSeconds, stage } = this.props;

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
        <small>You can spend as many time as you want to.</small>
      </div>
    );
  }
}

export default (Timer = StageTimeWrapper(timer));
