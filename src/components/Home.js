import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css' 

import Question from './Question'

const StyledTabPanel = styled(TabPanel)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class Home extends Component {
  render() {
    const { questionIds, answered } = this.props
    return (
      <Tabs>
        <TabList>
          <Tab>Unanswered</Tab>
          <Tab>Answered</Tab>
        </TabList>

        <StyledTabPanel>
          {questionIds
            .filter(qid => !answered.includes(qid))
            .map(qid => (
              <Question key={qid} qid={qid} page="HomePage" answered={false} />
            ))}
        </StyledTabPanel>
        <StyledTabPanel>
          {questionIds
            .filter(qid => answered.includes(qid))
            .map(qid => (
              <Question key={qid} qid={qid} page="HomePage" answered={true} />
            ))}
        </StyledTabPanel>
      </Tabs>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    answered: Object.keys(users[authedUser].answers)
  }
}


export default connect(mapStateToProps)(Home)
