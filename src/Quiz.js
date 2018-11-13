import React, {Component} from 'react'
import data from './quiz_data'
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1};
    }

    render() {

        const isQuized = ((this.state.quiz_position) === quizData.quiz_questions.length);

        return (
            //  <div className="QuizQuestion">{data.quiz_questions[0].instruction_text}</div>
            <div>
                {isQuized ? <QuizEnd/> :
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>}
            </div>

        )
    };

}

export default Quiz;