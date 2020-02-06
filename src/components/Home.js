import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Question from './Question'

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class Home extends Component {
  render() {
    return (
      <StyledMain>
        {this.props.questionIds.map(qid => <Question key={qid} qid={qid} page="HomePage"/>)}
      </StyledMain>
    )
  }
}


function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
