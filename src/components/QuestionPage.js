import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import QuestionDetails from './QuestionDetails'
import NotFound from './NotFound'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

`

function QuestionPage (props) {
  
  const id = props.match.params.question_id
  const question = props.questions[id]

  if (!question) {
    return <NotFound />
  }
  
  return (
    <StyledDiv>
      <QuestionDetails qid={id} page="QuestionPage" />
    </StyledDiv>
  )
  
}

function mapStateToProps({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(QuestionPage)
