import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import QuestionPreview from './QuestionPreview'

const StyledImg = styled.img`
  border-radius: 50%;
  padding: 0 20px;
  height: 100px;
`

const StyledContainer = styled.div`
  border: 2px solid #e8e9eb;
  border-radius: 5px;
  width: 50%;
  margin-top: 2rem;
`

const QuestionDiv = styled.div`
  width: 100%;
`

const Title = styled.div`
  display: flex;
  border-bottom: 2px solid #e8e9eb;
  padding-left: 20px;
  background-color: ${props => props.titleColor || "#ccedd5"};
`

const StyledDiv = styled.div`
  display: flex;
`
const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;
  margin: 20px 0;
`

class Question extends Component {
  render(){
    const { avatarURL, userName, question, answered } = this.props
    
    return (
      <StyledContainer id={question.id}>
        <Title titleColor={answered && "#e6e6e6"}>
          <p>{`${userName} asks:`}</p>
        </Title>
        <StyledDiv>
          <UserDiv>
            <StyledImg src={avatarURL} alt={`Avatar of ${userName}`} />
          </UserDiv>
          <QuestionDiv>
            <h3>Would you rather...</h3>

              <QuestionPreview
                optionOneText={question.optionOne.text}
                optionTwoText={question.optionTwo.text}
                id={question.id}
                isAnswered={answered}
              />
          </QuestionDiv>
        </StyledDiv>
      </StyledContainer>
    )
  }
}

function mapStateToProps({ users, questions }, { qid }) {
  const question = questions[qid]
  const userId = question.author

  return {
    question,
    avatarURL: users[userId].avatarURL,
    userName: users[userId].name,
  }
}

export default connect(mapStateToProps)(Question)
