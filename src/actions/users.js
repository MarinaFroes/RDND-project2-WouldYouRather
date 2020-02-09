import { getUsers } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USERS = 'UPDATE_USERS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function updateUsers(users) {
  return {
    type: UPDATE_USERS,
    users
  }
}

export function handleUpdateUsers() {
  return dispatch => {
    dispatch(showLoading())
    return getUsers().then((users) => {
      dispatch(updateUsers(users))
      dispatch(hideLoading())
    })
  }
}
/**
 * export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
 */