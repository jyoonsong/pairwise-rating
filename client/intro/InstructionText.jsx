import React from "react";

export default class InstructionText extends React.Component {


  render() {
    return (
        <div>
          <h1>Instructions</h1>

          <h3>Task</h3>
          <p className="instruction-text">
            Your task is to evaluate the love stories.<br/>
            We will show you two stories in each round, and you will be choosing a better one between the two.<br/>
            In each round, you need to spend at least 20 seconds and write a short reason for your choice.<br/> 
            <br/>
            You must complete at least 10 rounds.<br/>
            After 10 rounds, you can choose to either stay in the system or finish the task.<br/>
            If you choose to finish the task, you will get a code. If you submit this code back at Mechanical Turk, you're done!<br/>
          </p>

          <h3>Payment</h3>
          <p className="instruction-text">
            <b>Base payment: $2 for participation</b><br/>
            - Requirement: choosing a better story in each of 10 rounds from reasonable grounds.<br/>
            <br/>
            <b>Bonus payment: $0.2 per additional round</b><br/>
            - Requirement: choosing a better story from reasonable grounds.<br/>
            <br/>
            ex) Payment for finishing 12 rounds with acceptable reasons = 2 + 0.2 * 2 = $2.4<br/>
            ex) Payment for finishing 10 rounds with unacceptable reasons = $0<br/>
          </p>

          <h3>Criteria for reasonable grounds</h3>
          <div className="instruction-text examples">
            <div className="good example">
              <div className="label">Example of an acceptable reason</div>
                <b>Mentioning a specific part of the story</b>:<br/>
                I liked the overall part, particularly the part where the girl receives a flower from the boy.<br/><br/>

                <b>Mentioning a specific part of the story</b>:<br/>
                I liked the overall part, particularly the part where the girl receives a flower from the boy.<br/><br/>
            </div>
            <div className="bad example">
            <div className="label">Example of reasons that will NOT be paid</div>
              <b>Pasting the same phrases or sentences too many times</b>:<br/>
              This one has better word choices. This one has better word choices. This one has better word choices.<br/><br/>

              <b>Simply repeating that it is better</b>:<br/>
              The left one seems better.<br/><br/>

              <b>Not making sense at all</b>:<br/>
              Because my favorite animal appears in the story.<br/><br/>

              <b>Not in english</b>:<br/>
              Iaculis, habitant facilisis nullam<br/><br/>

            </div>
          </div>
        </div>
    );
  }
}
