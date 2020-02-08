import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import QuestionPreview from './QuestionPreview'
import UserInfo from './UserInfo'

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

class Question extends Component {
  render(){
    const { avatarURL, userName, question, answered } = this.props
    
    return (
      <StyledContainer id={question.id}>
        <Title titleColor={answered && "#e6e6e6"}>
          <p>{`${userName} asks:`}</p>
        </Title>
        <StyledDiv>
          <UserInfo userName={userName} avatarURL={avatarURL} />
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

/*
<UserDiv>
  <StyledImg src={avatarURL} alt={`Avatar of ${userName}`} />
</UserDiv>
 */