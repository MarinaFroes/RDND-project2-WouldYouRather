import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_ANSWER:
      // TODO
      return null
    case ADD_QUESTION:
      // TODO
      return null
    default:
      return state
  }
}
