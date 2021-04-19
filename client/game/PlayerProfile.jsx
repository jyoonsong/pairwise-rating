import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  state = { score: this.props.player.get("score") };

  renderProfile() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <p><b>Your Worker ID</b>: {player.id}<br/><br/></p>
      </div>
    );
  }

  renderScore() {
    const { player } = this.props;
    const score = player.get("score");

    return (
      <div className="profile-score">
        <b>Current status</b>:<br/>
        <span>{score} rounds completed</span><br/><br/>

        <b>Expected reward</b>:<br/>
        {score < 10 ? 
          <span>$0 <br/><small>*You need to complete at least 10 rounds</small></span>
        :
          <span>$2 ~ ${(score * 0.2).toFixed(1)}</span>
        }
        <br/>
      </div>

    );
  }
  render() {
    const { stage } = this.props;

    return (
      <aside className="player-profile">
        {this.renderProfile()}
        {this.renderScore()}
        <Timer stage={stage} />
      </aside>
    );
  }
}
