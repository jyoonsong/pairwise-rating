import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Quiz extends React.Component {
  state = { sum: "", horse: "" };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.sum !== "love" || this.state.horse !== "10") {
      alert("Incorrect! Read the instructions, and please try again.");
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { sum, horse } = this.state;
    return (
      <Centered>
        <div className="quiz">
          <h1> Quiz </h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="sum">
                Your task is to evaluate the XXXX stories. What is the correct 4-letter word for XXXX?</label>
              <input
                type="text"
                dir="auto"
                id="sum"
                name="sum"
                placeholder="e.g., horror"
                value={sum}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </p>
            <p>
              <label htmlFor="horse">
                You must complete at least X rounds in this task. What is the correct number for X?
              </label>
              <input
                type="text"
                dir="auto"
                id="horse"
                name="horse"
                placeholder="e.g., 5"
                value={horse}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </p>

            <p>
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
              </button>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}