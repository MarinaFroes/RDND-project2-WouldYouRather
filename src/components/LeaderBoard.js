import React, { Component } from 'react'
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

class LeaderBoard extends Component {
  
  render() {
    const { usersIds } = this.props

    if (!usersIds) {
      return (
        <ErrorMessage>Failed to load users</ErrorMessage>
      )
    }

    return (
      <Main>
        <h2>Leader Board</h2>
        {usersIds.map(userId => (
            <User
              id={userId}
              key={userId}
            />
        ))}
      </Main>
    )
  }
}

function mapStateToProps({ users }) {
  
  return {
    usersIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(LeaderBoard)
