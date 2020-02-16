import React from 'react'
import styled from 'styled-components'

import QuestionDetails from './QuestionDetails'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

`
const ErrorMessage = styled.h1`
  color: red;
`

function QuestionPage (props) {
  
  const id = props.match.params.question_id
  
  return (
    <StyledDiv>
      {id !== undefined ? (
        <QuestionDetails qid={id} page="QuestionPage" />
      ) : (
        <ErrorMessage>Question not found</ErrorMessage>
      )}
    </StyledDiv>
  )
  
}

export default QuestionPage
