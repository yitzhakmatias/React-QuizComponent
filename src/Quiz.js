import React, {Component} from 'react'
import data from './quiz_data'
import QuizQuestion from "./QuizQuestion";
let quizData = require('./quiz_data.json')
class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1};
    }

    render() {
        return (
          //  <div className="QuizQuestion">{data.quiz_questions[0].instruction_text}</div>
            <QuizQuestion quizQuestion={quizData.quiz_questions[this.state.quiz_position-1]}/>
        )
    };

}

export default Quiz;