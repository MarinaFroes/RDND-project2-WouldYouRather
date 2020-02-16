import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import QuestionPreview from './QuestionPreview'
import UserInfo from './UserInfo'
import CardTitle from './CardTitle'

const CardContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  width: 50%;
  margin-top: 2rem;

  @media only screen and (max-width: 700px){
    width: 80%;
  }

  @media only screen and (max-width: 500px){
    width: 100%;
  }
`

const QuestionDiv = styled.div`
  width: 100%;
`

const StyledDiv = styled.div`
  display: flex;
  padding: 1rem;
`

function Question({ avatarURL, userName, question, isAnswered }){
  
  return (
    <CardContainer id={question.id}>
      <CardTitle
        text={`${userName} asks:`}
        titleColor={isAnswered && "#e6e6e6"}
        timestamp={question.timestamp}
      />
      <StyledDiv>
        <UserInfo userName={userName} avatarURL={avatarURL} />
        <QuestionDiv>
          <h3>Would you rather...</h3>
          <QuestionPreview
            optionOneText={question.optionOne.text}
            optionTwoText={question.optionTwo.text}
            id={question.id}
            isAnswered={isAnswered}
          />
        </QuestionDiv>
      </StyledDiv>
    </CardContainer>
  )
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
