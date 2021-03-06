import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import User from './User'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
`

function LeaderBoard({ users }) {

  if (!users) {
    return <ErrorMessage>Failed to load users</ErrorMessage>
  }

  const scoredUsers = {}

  for (const user in users) {
    const totalQuestions = users[user].questions.length
    const totalAnswers = Object.keys(users[user].answers).length
      
    const userInfo = {
      name: users[user].name,
      avatarURL: users[user].avatarURL,
      totalQuestions,
      totalAnswers,
      score: totalQuestions + totalAnswers
    }

    scoredUsers[users[user].id] = userInfo
  }

  const sortedIds = Object.keys(scoredUsers).sort(
    (a, b) => scoredUsers[b].score - scoredUsers[a].score
  )

  return (
    <Main>
      <h2>Leader Board</h2>
      {sortedIds.map((userId, index) => (
        <User id={userId} key={userId} position={index + 1}/>
      ))}
    </Main>
  )
}

function mapStateToProps({ users }) { 
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard)
