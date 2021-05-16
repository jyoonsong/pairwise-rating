import React from "react";

export default class InstructionText extends React.Component {


  render() {
    return (
        <div>
          <h1>Instructions</h1>

          <h3>Task</h3>
          <p className="instruction-text">
            Your task is to <b>guess which love story the majority of other raters would prefer</b>.<br/>
            We will show you two stories in each round. <br/>
            Then, you will be guessing a story do you think the majority of other raters would prefer between the two stories.<br/>
            Before proceeding to do this main task, there will be a simple quiz about the stories to make sure that you read them. (You are given infinite times to try this question.)<br/>
            <br/>
            You must complete at least <b>10 rounds</b>.<br/>
            If you choose to finish the task, you will get a code. If you submit this code back at Mechanical Turk, you're done!<br/>
          </p>

          <h3>Payment</h3>
          <p className="instruction-text">
            <b>The more rounds you correctly guess, the more payment you will get.</b><br/><br/>
            ~ 50% correct (inclusive): <b>$0.5</b><br/>
            ~ 70% correct (inclusive): <b>$2</b><br/>
            ~ 80% correct (inclusive): <b>$4</b><br/>
            ~ 100% correct (inclusive): <b>$5</b><br/>
            <br/>
            ex) Payment for guessing 6 rounds correct = $2<br/>
            ex) Payment for guessing 9 rounds correct = $5<br/>
          </p>

          <h3>Please make sure to actually read the stories</h3>
          <p className="instruction-text">
            We will check the quiz answers, time taken, correct rate, and so on to make sure you actually read the stories.<br/>
            Please make sure to read the stories.
          </p>

          {/* <h3>Criteria for reasonable grounds</h3>
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
          </div> */}
        </div>
    );
  }
}
