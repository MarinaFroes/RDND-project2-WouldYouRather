import React, { Component } from 'react'
import styled from 'styled-components'

import QuestionDetails from './QuestionDetails'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

`

class QuestionPage extends Component {
  render() {
    const id = this.props.match.params.question_id
    
    return (
      <StyledDiv>
        {id !== undefined ? (
          <QuestionDetails qid={id} page="QuestionPage" />
        ) : (
          <h1 style={{ color: "red" }}>Question not found</h1>
        )}
      </StyledDiv>
    )
  }
}

export default QuestionPage
