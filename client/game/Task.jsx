import React from "react";

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

    console.log(this.state.answer1)
    console.log(this.state.answer2)

    let answer = "neutral";
    if (stories[0].sentiment > 0.2) {
      answer = "positive";
    }
    else if (stories[0].sentiment < -0.2) {
      answer = "negative";
    }

    let passed1 = (this.state.answer1 === answer) ? true: false;
    console.log(passed1)

    answer = "neutral";
    if (stories[1].sentiment > 0.2) {
      answer = "positive";
    }
    else if (stories[1].sentiment < -0.2) {
      answer = "negative";
    }

    let passed2 = (this.state.answer2 === answer) ? true: false;
    console.log(passed2)

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
            <div className="task-response">
            <form className="task-response-form">
                <div className="full text-center">
                    <div className="half">
                      Is the tone of this story positive or negative?
                      <br/>
                      <input id="tone_positive" name="tone" className="radio" type="radio" onChange={this.handleChange}></input>
                      <label htmlFor="tone_positive"> Positive</label>
                      <br/>
                      <input id="tone_neutral" name="tone" className="radio" type="radio" onChange={this.handleChange}></input>
                      <label htmlFor="tone_neutral"> Neutral</label>
                      <br/>
                      <input id="tone_negative" name="tone" className="radio" type="radio" onChange={this.handleChange}></input>
                      <label htmlFor="tone_negative"> Negative</label>
                    </div>
                    <div className="half">
                      Is the tone of this story positive or negative?
                      <br/>
                      <input id="tone2_positive" name="tone2" className="radio" type="radio" onChange={this.handleChange}></input>
                      <label htmlFor="tone2_positive"> Positive</label>
                      <br/>
                      <input id="tone2_neutral" name="tone2" className="radio" type="radio" onChange={this.handleChange}></input>
                      <label htmlFor="tone2_neutral"> Neutral</label>
                      <br/>
                      <input id="tone2_negative" name="tone2" className="radio" type="radio" onChange={this.handleChange}></input>
                      <label htmlFor="tone2_negative"> Negative</label>
                    </div>
                </div>
            </form>
            <div className="text-center mt-1">
              <button onClick={this.handleClick}>Submit</button>
            </div>
            </div>
          }
      </div>
    );
  }
}
