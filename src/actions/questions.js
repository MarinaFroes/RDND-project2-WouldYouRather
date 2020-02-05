import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText: question.optionOneText,
      optionTwoText: question.optionTwoText
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function addAnswer(answer) {
  return {
    type: SAVE_ANSWER,
    answer
  }
}

export function handleSaveAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser: authedUser,
      qid,
      answer
    })
      .then(answerInfo => dispatch(addAnswer(answerInfo)))
      .then(() => dispatch(hideLoading()))
  }
}
