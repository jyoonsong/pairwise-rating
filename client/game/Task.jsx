import React from "react";

import TaskQuiz from "./TaskQuiz";
import TaskResponse from "./TaskResponse";
import TaskStimulus from "./TaskStimulus";

export default class Task extends React.Component {
  state = { 
    passed: false,
    answer1: "",
    answer2: "",
  };

  handleClick = e => {
    const { round } = this.props;
    const stories = round.get("stories");

    let answer = "neutral";
    if (stories[0].sentiment > 0.2) {
      answer = "positive";
    }
    else if (stories[0].sentiment < -0.2) {
      answer = "negative";
    }

    let passed1 = (this.state.answer1 === answer) ? true: false;

    answer = "neutral";
    if (stories[1].sentiment > 0.2) {
      answer = "positive";
    }
    else if (stories[1].sentiment < -0.2) {
      answer = "negative";
    }

    let passed2 = (this.state.answer2 === answer) ? true: false;

    if (passed1 && passed2) {
      this.setState(prevState => ({
        ...prevState,
        passed: true
      }))
    }
    else {
      alert("Wrong answer. Try again!");
    }
  }

  handleChange = e => {
    if (e.target.checked) {
      const submitted = e.target.id;
      if (submitted.startsWith("tone_")) {
        this.setState(prevState => ({
          ...prevState,
          answer1: submitted.substring(5, )
        }))
      }
      else {
        this.setState(prevState => ({
          ...prevState,
          answer2: submitted.substring(6, )
        }))
      }
    }
  }

  render() {
    const { round } = this.props;
    const { passed } = this.state;
    const stories = round.get("stories");

    return (
      <div className="task">
        <TaskStimulus {...this.props} stories={stories} />
        
          {passed ?
            <TaskResponse {...this.props} stories={stories} />
            :
            <TaskQuiz {...this.props} handleChange={this.handleChange} handleClick={this.handleClick} />
          }
      </div>
    );
  }
}
