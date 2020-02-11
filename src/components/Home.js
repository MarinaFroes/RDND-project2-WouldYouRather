import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css' 
import { GiGlassCelebration } from 'react-icons/gi'
import { FaSadTear } from 'react-icons/fa'

import Question from './Question'

const StyledTabPanel = styled(TabPanel)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CardContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 2rem;
`
const MessageText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #264d00;
  font-size: 4rem;
  margin: 1rem;
`

class Home extends Component {
  render() {
    const { answered, unanswered } = this.props

    return (
      <Tabs>
        <TabList>
          <Tab>Unanswered</Tab>
          <Tab>Answered</Tab>
        </TabList>

        <StyledTabPanel>
          {unanswered.length < 1 ? (
            <CardContainer>
              <StyledIcon>{<GiGlassCelebration />}</StyledIcon>
              <MessageText>Great! No unanswered questions for now</MessageText>
            </CardContainer>
          ) : (
            unanswered.map(qid => (
              <Question
                key={qid}
                qid={qid}
                page="HomePage"
                isAnswered={false}
              />
            ))
          )}
        </StyledTabPanel>
        <StyledTabPanel>
          {answered.length < 1 ? (
            <CardContainer>
              <StyledIcon>{<FaSadTear />}</StyledIcon>
              <MessageText>You didn't answer any question yet.</MessageText>
            </CardContainer>
          ) : (
            answered.map(qid => (
              <Question key={qid} qid={qid} page="HomePage" isAnswered={true} />
            ))
          )}
        </StyledTabPanel>
      </Tabs>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  )
  const answered = Object.keys(users[authedUser].answers)
  const unanswered = questionIds.filter(qid => !answered.includes(qid))

  return {
    answered,
    unanswered
  }
}


export default connect(mapStateToProps)(Home)
