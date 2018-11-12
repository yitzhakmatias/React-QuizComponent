import React, {Component} from 'react'
import data from './quiz_data'
let quizData = require('./quiz_data.json')
class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1};
    }

    render() {
        return (
            <div className="QuizQuestion">{data.quiz_questions[0].instruction_text}</div>
        )
    };

}

export default Quiz;