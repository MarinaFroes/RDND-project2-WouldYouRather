import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { handleSaveAnswer } from '../actions/questions'
import { handleUpdateUsers } from '../actions/users'
import UserInfo from './UserInfo'
import CardTitle from './CardTitle'
import AnsweredQuestion from './AnsweredQuestion'
import SubmitButton from './SubmitButton'

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
`

const InputDiv = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
`

const Label = styled.label`
  margin-left: 0.5rem;
`

class QuestionDetails extends Component {
  state = {
    answer: ''
  }

  handleRadioChange = e => {
    this.setState({
      answer: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const {answer} = this.state 
    const qid = this.props.qid
    const {dispatch} = this.props
    
    dispatch(handleSaveAnswer(answer, qid))
    dispatch(handleUpdateUsers())

    this.setState(() => ({
      answer: ''
    }))
  }

  render() {
    const {
      question,
      avatarURLAuthor,
      authorName,
      authedUserAnswers,
      isAnswered
    } = this.props

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    const userAnswer = authedUserAnswers[question.id]

    const votesOptionOne = question.optionOne.votes.length
    const votesOptionTwo = question.optionTwo.votes.length
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text

    const values = ["optionOne", "optionTwo"]
    
    return (
      <CardContainer id={question.id}>
        <CardTitle
          text={`${authorName} asks:`}
          titleColor={isAnswered && "#e6e6e6"}
          timestamp={question.timestamp}
        />
        <StyledDiv>
          <UserInfo userName={authorName} avatarURL={avatarURLAuthor} />
          <QuestionDiv>
            <h3>Would you rather...</h3>
            {isAnswered ? (
              <AnsweredQuestion
                totalVotes={totalVotes}
                userAnswer={userAnswer}
                votesOptionOne={votesOptionOne}
                votesOptionTwo={votesOptionTwo}
                optionOneText={optionOneText}
                optionTwoText={optionTwoText}
              />
            ) : (
              <form onSubmit={this.handleSubmit}>
                  {
                    values.map(value => (
                      <InputDiv key={value}>
                        <input
                          type="radio"
                          name="option"
                          value={value}
                          checked={this.state.answer === `${value}`}
                          onChange={this.handleRadioChange}
                        />
                        <Label htmlFor="optionTwo">...{
                          value === "optionOne"
                          ? optionOneText
                          : optionTwoText
                        }?</Label>
                      </InputDiv>
                    ))
                  }
                <SubmitButton />
              </form>
            )}
          </QuestionDiv>
        </StyledDiv>
      </CardContainer>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { qid }) {
  const question = questions[qid]
  const authorId = question.author
  const answeredIDs = Object.keys(users[authedUser].answers)

  return {
    question,
    avatarURLAuthor: users[authorId].avatarURL,
    authorName: users[authorId].name,
    authedUserAnswers: users[authedUser].answers,
    isAnswered: answeredIDs.includes(question.id)
  }
}

export default connect(mapStateToProps)(QuestionDetails)
