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
    const { questionIds, isAnswered } = this.props
    return (
      <Tabs>
        <TabList>
          <Tab>Unanswered</Tab>
          <Tab>Answered</Tab>
        </TabList>

        <StyledTabPanel>
          {questionIds
            .filter(qid => !isAnswered.includes(qid))
            .map(qid => (
              <Question
                key={qid}
                qid={qid}
                page="HomePage"
                isAnswered={false}
              />
            ))}
        </StyledTabPanel>
        <StyledTabPanel>
          {questionIds
            .filter(qid => isAnswered.includes(qid))
            .map(qid => (
              <Question key={qid} qid={qid} page="HomePage" isAnswered={true} />
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
    isAnswered: Object.keys(users[authedUser].answers)
  }
}


export default connect(mapStateToProps)(Home)
