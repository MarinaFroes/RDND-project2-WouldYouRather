import React, { Component } from 'react'

import Question from './Question'

class QuestionPage extends Component {
  render() {
    return (
      <div>
        <Question
          userName="Sara"
          userId="sarahedo"
          avatarURL="https://picsum.photos/seed/picsum/50/50"
          optionOne="be a front-end developer?"
          optionTwo="be a back-end developer?"
        />
      </div>
    )
  }
}

export default QuestionPage
