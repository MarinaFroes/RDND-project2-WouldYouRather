import React, { Component } from 'react'
import styled from 'styled-components'


const CardDiv = styled.div`
  display: flex;
  border: 2px solid #e8e9eb;
  border-radius: 5px;
  width: 50%;
  margin-top: 2rem;
`

const InfoDiv = styled.div`
  width: 100%;
  margin: 1rem;
`

const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;
  background-color: #e6e6e6;
`

const StyledImg = styled.img`
  border-radius: 50%;
  padding: 0 20px;
  height: 100px;
`

const Score = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: red;
`

class User extends Component {
  render() {
    const { avatarURL, userName, questions, answers, score } = this.props

    return (
      <CardDiv>
        <UserDiv>
          <StyledImg src={avatarURL} alt={`Avatar of ${userName}`} />
        </UserDiv>
        <InfoDiv>
          <h3>{userName}</h3>
          <p>
            Asked <strong>{questions}</strong> questions and answered{" "}
            <strong>{answers}</strong> questions
          </p>
          <Score>Total Score: {score}</Score>
        </InfoDiv>
      </CardDiv>
    )
  }
}

export default User
