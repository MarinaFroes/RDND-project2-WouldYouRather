import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { handleSaveAnswer } from '../actions/questions'
import { handleUpdateUsers } from '../actions/users'
import UserInfo from './UserInfo'
import CardTitle from './CardTitle'
import AnsweredQuestion from './AnsweredQuestion'

const StyledContainer = styled.div`
  border: 2px solid #e8e9eb;
  border-radius: 5px;
  width: 50%;
  margin-top: 2rem;
`

const QuestionDiv = styled.div`
  width: 100%;
`

const StyledDiv = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: #e6e6e6;
  color: #000;
  margin: 2rem;
  width: 70%;
  border: none;
  padding: 5px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-color: #bfbfbf;
    cursor: pointer;
  }
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
    
    return (
      <StyledContainer id={question.id}>
        <CardTitle
          text={`${authorName} asks:`}
          titleColor={isAnswered && "#e6e6e6"}
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
                <InputDiv>
                  <input
                    type="radio"
                    name="option"
                    value="optionOne"
                    checked={this.state.answer === "optionOne"}
                    onChange={this.handleRadioChange}
                  />
                  <Label htmlFor="optionOne">
                    ...{question.optionOne.text}?
                  </Label>
                </InputDiv>
                <InputDiv>
                  <input
                    type="radio"
                    name="option"
                    value="optionTwo"
                    checked={this.state.answer === "optionTwo"}
                    onChange={this.handleRadioChange}
                  />
                  <Label htmlFor="optionTwo">
                    ...{question.optionTwo.text}?
                  </Label>
                </InputDiv>
                <Button type="submit">Submit</Button>
              </form>
            )}
          </QuestionDiv>
        </StyledDiv>
      </StyledContainer>
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
