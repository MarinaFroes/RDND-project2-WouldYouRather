import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'

import { handleSaveAnswer } from '../actions/questions'
import { handleUpdateUsers } from '../actions/users'
import UserInfo from './UserInfo'
import CardTitle from './CardTitle'

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

const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.userAnswer || "#fff"};
  margin: 1rem;
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InputDiv = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
`

const Label = styled.label`
  margin-left: 0.5rem;
`
const StyledIcon = styled.div`
  color: ${props => props.userAnswer || "#fff"};
  font-size: 2rem;
  margin-right: 1rem;
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
              <div>
                <OptionDiv userAnswer={userAnswer === "optionOne" && "#ccedd5"}>
                  <TextDiv>
                    <p>...{question.optionOne.text}</p>
                    <p>
                      <strong>Votes:</strong> {question.optionOne.votes.length}{" "}
                      out of {totalVotes} (
                      {(question.optionOne.votes.length / totalVotes) * 100}%)
                    </p>
                  </TextDiv>
                  <StyledIcon
                    userAnswer={userAnswer === "optionOne" && "green"}
                  >
                    {<FaCheckCircle />}
                  </StyledIcon>
                </OptionDiv>
                <OptionDiv userAnswer={userAnswer === "optionTwo" && "#ccedd5"}>
                  <TextDiv>
                    <p>...{question.optionTwo.text}</p>
                    <p>
                      <strong>Votes:</strong> {question.optionTwo.votes.length}{" "}
                      out of {totalVotes} (
                      {(question.optionTwo.votes.length / totalVotes) * 100}%)
                    </p>
                  </TextDiv>
                  <StyledIcon
                    userAnswer={userAnswer === "optionTwo" && "green"}
                  >
                    {<FaCheckCircle />}
                  </StyledIcon>
                </OptionDiv>
              </div>
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
