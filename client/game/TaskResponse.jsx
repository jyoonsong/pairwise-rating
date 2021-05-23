import React from "react";

export default class TaskResponse extends React.Component {
  state = { 
    showSubmit: false,
  };

  handleChange = e => {
    const { player } = this.props;

    if (e.target.checked) {
      player.round.set("value", e.target.id);
      this.setState(prevState => ({
        ...prevState,
        showSubmit: true,
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

  render() {
    const { player, stories } = this.props;
    const { showSubmit } = this.state;
    // const stories = round.get("stories");
    

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
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

          {showSubmit ? <button type="submit" className="submit">Submit</button> : "*Submit button will show up as soon as you choose one of the stories"}
        </form>
      </div>
    );
  }
}
