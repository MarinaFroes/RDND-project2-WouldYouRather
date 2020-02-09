import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  border: none;
  padding: 5px;
  text-align: center;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`

function QuestionPreview({ optionOneText, optionTwoText, id, isAnswered }) {
  return (
    <div>
      <p>
        ...{optionOneText} or {optionTwoText}?
      </p>
      <StyledLink to={`/question/${id}`}>
        {
          isAnswered === true 
          ? 'Click here to check Answers' 
          : 'Click here to answer'
        }
      </StyledLink>
    </div>
  )
}

export default QuestionPreview