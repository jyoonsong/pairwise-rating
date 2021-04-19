import React from "react";

const questions = ["Name one of the female characters in the chosen story.", "Name one of the male characters in the chosen story.", "Is there any conversation in the chosen story?", "Is the ending of the chosen story happy or sad?"]

export default class TaskResponse extends React.Component {
  state = { 
    checked: false,
    reasoned: false,
    showSubmit: false,
  };
  question = questions[Math.floor(Math.random() * questions.length)]

  handleChange = e => {
    const { player } = this.props;

    if (e.target.checked) {
      player.round.set("value", e.target.id);
      this.setState(prevState => ({
        ...prevState,
        checked: true,
        showSubmit: prevState.reason
      }));
    }
  };

  handleReasonChange = e => {
    const reason = e.target.value;
    const { player } = this.props;

    if (reason.trim().length > 0) {
      player.round.set("reason", reason);
      this.setState(prevState => ({
        ...prevState,
        reason: true,
        showSubmit: prevState.checked
      }));
    }
  };


  handleSubmit = e => {
    const { showSubmit } = this.state;
    e.preventDefault();

    if (showSubmit) {
      this.props.player.stage.submit();
    }
    else {
      alert("Please choose a story!")
    }
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>You already submitted response...</h5>
          If you are having trouble, please contact <a href="mailto:jyo3on@gmail.com">jyo3on@gmail.com</a>
        </div>
      </div>
    );
  }

  renderCheckbox() {
    return (
      <div className="checkbox">

      </div>
    );
  }

  render() {
    const { round, player } = this.props;
    const { showSubmit } = this.state;
    const stories = round.get("stories");
    

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
      <div>
        <div className="task-stimulus">
          <div className="full text-center">
            <b>Please choose a better love story.</b>
          </div>
          <div className="full">
            <div className="half story">
              {stories[0].content}<br/>
              {stories[0]._id}<br/>
              {stories[0].allocated}
            </div>
            <div className="half story">
              {stories[1].content}<br/>
              {stories[1]._id}<br/>
              {stories[0].allocated}
            </div>
          </div>
        </div>

        <div className="task-response">
          
          <form className="task-response-form" onSubmit={this.handleSubmit}>
            <div className="full">
              <div className="half">
                <input id={"story" + stories[0]._id} name="story" className="btn" type="radio" onChange={this.handleChange}></input>
                <label htmlFor={"story" + stories[0]._id}></label>
              </div>
              <div className="half">
                <input id={"story" + stories[1]._id} name="story" className="btn" type="radio" onChange={this.handleChange}></input>
                <label htmlFor={"story" + stories[1]._id}></label>
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="text-center"><b>Why did you think so?</b></label>
              <textarea id="reason" className="reason" onChange={this.handleReasonChange} placeholder="e.g., First, it has better word usage. Second, the plot is interesting and far from cliche. Lastly, the other one is just nonsensical."></textarea>
            </div>

            <div>
              <label htmlFor="quiz" className="text-center"><b>{this.question}</b></label>
              <textarea id="quiz" className="quiz" placeholder="Type answer to the question"></textarea>
            </div>

            <button type="submit" className={ showSubmit ? "submit" : "submit inactive" }>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
