import React from "react";

export default class TaskStimulus extends React.Component {

  render() {
    const { round } = this.props;
    const stories = round.get("stories");

    return (
        <div className="task-stimulus">
            <div className="full text-center flex-direction-column">
                <div><b>Which story do you think the majority of other raters would prefer?</b></div>
                <div>You get more rewards if you guess it correctly!</div>
            </div>
            <div className="full">
            <div className="half story">
                {stories[0].story}<br/>
                {stories[0]._id}<br/>
                {stories[0].allocated}<br/>
                {stories[0].compared}
            </div>
            <div className="half story">
                {stories[1].story}<br/>
                {stories[1]._id}<br/>
                {stories[1].allocated}<br/>
                {stories[1].compared}
            </div>
            </div>
        </div>
    );
  }
}
