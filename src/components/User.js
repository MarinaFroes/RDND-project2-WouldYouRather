import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import UserInfo from './UserInfo'

const CardContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  display: flex;
  width: 50%;
  margin-top: 2rem;
  position: relative;
`

const InfoDiv = styled.div`
  width: 100%;
  margin: 1rem;
`

const Score = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: red;
`

const Position = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: absolute;
  top: -20px;
  left: -20px;
  background-color: #ccedd5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledPosition = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

class User extends Component {
  render() {
    const { users, id, position } = this.props

    if (!users) {
      return <p>Users don't exist</p>
    }

    const user = users[id]

    if (!user) {
      return <p>This user doesn't exist</p>
    }
    
    return (
      <CardContainer>
        <Position>
          <StyledPosition>{position}</StyledPosition>
        </Position>
        <UserInfo userName={user.name} avatarURL={user.avatarURL} />
        <InfoDiv>
          <h3>{user.name}</h3>
          <p>
            Asked <strong>{user.questions.length}</strong> questions and
            answered <strong>{Object.keys(user.answers).length}</strong>{" "}
            questions
          </p>
          <Score>
            Total Score:{" "}
            {Object.keys(user.answers).length + user.questions.length}
          </Score>
        </InfoDiv>
      </CardContainer>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(User)
