import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_ANSWER:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const { question } = action

      return {
        ...state,
        [question.id]: question,
        // users: state.users[question.author].questions.concat([question.id])
      }
    default:
      return state
  }
}

/*
  case ADD_TWEET:
      const { tweet } = action
      let replyingTo = {}

      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([[tweet.id]])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo
      }
 */