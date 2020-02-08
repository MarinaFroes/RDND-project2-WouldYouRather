import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'


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
    const { users, id } = this.props

    if (!users) {
      return <p>Users don't exist</p>
    }

    const user = users[id]
    if (!user) {
      return <p>This user doesn't exist</p>
    }
  
    return (
      <CardDiv>
        <UserDiv>
          <StyledImg src={user.avatarURL} alt={`Avatar of ${user.name}`} />
        </UserDiv>
        <InfoDiv>
          <h3>{user.name}</h3>
          <p>
            Asked <strong>{user.questions.length}</strong> questions and answered{" "}
            <strong>{Object.keys(user.answers).length}</strong> questions
          </p>
          <Score>Total Score: {Object.keys(user.answers).length + user.questions.length}</Score>
        </InfoDiv>
      </CardDiv>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(User)