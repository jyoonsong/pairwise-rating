import React from "react";

export default class TaskStimulus extends React.Component {

  render() {
    const { round } = this.props;
    const stories = round.get("stories");
    

    return (
        <div className="task-stimulus">
            <div className="full text-center">
            <b>Which story do you think the majority of other raters would prefer?</b>
            </div>
            <div className="full">
            <div className="half story">
                {stories[0].story}<br/>
                {stories[0]._id}<br/>
                {stories[0].allocated}
            </div>
            <div className="half story">
                {stories[1].story}<br/>
                {stories[1]._id}<br/>
                {stories[1].allocated}
            </div>
            </div>
        </div>
    );
  }
}
