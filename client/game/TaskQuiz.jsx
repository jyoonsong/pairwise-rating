import React from "react";

export default class TaskQuiz extends React.Component {

    render() {
        const { handleChange, handleClick } = this.props;

        return (
            <div className="task-response">
                <form className="task-response-form">
                    <div className="full text-center">
                        <div className="half">
                        Is the tone of this story positive or negative?
                        <br/>
                        <input id="tone_positive" name="tone" className="radio" type="radio" onChange={(e) => handleChange(e)}></input>
                        <label htmlFor="tone_positive"> Positive</label>
                        <br/>
                        <input id="tone_neutral" name="tone" className="radio" type="radio" onChange={(e) => handleChange(e)}></input>
                        <label htmlFor="tone_neutral"> Neutral</label>
                        <br/>
                        <input id="tone_negative" name="tone" className="radio" type="radio" onChange={(e) => handleChange(e)}></input>
                        <label htmlFor="tone_negative"> Negative</label>
                        </div>
                        <div className="half">
                        Is the tone of this story positive or negative?
                        <br/>
                        <input id="tone2_positive" name="tone2" className="radio" type="radio" onChange={(e) => handleChange(e)}></input>
                        <label htmlFor="tone2_positive"> Positive</label>
                        <br/>
                        <input id="tone2_neutral" name="tone2" className="radio" type="radio" onChange={(e) => handleChange(e)}></input>
                        <label htmlFor="tone2_neutral"> Neutral</label>
                        <br/>
                        <input id="tone2_negative" name="tone2" className="radio" type="radio" onChange={(e) => handleChange(e)}></input>
                        <label htmlFor="tone2_negative"> Negative</label>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-1">
                <button onClick={(e) => handleClick(e)}>Submit</button>
                </div>
            </div>
        )
    }

}