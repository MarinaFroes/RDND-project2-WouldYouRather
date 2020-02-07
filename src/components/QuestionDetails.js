import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'


const StyledImg = styled.img`
  border-radius: 50%;
  padding: 0 20px;
  height: 100px;
`

const StyledContainer = styled.div`
  border: 2px solid #e8e9eb;
  border-radius: 5px;
  width: 50%;
  margin-top: 2rem;
`

const QuestionDiv = styled.div`
  width: 100%;
`

const Title = styled.div`
  display: flex;
  border-bottom: 2px solid #e8e9eb;
  padding-left: 20px;
  background-color: ${props => props.titleColor || "#ccedd5"};
`

const StyledDiv = styled.div`
  display: flex;
`

const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;
  margin: 20px 0;
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
        <Title
          titleColor={isAnswered && "#e6e6e6"}
        >
          <p>{`${authorName} asks:`}</p>
        </Title>
        <StyledDiv>
          <UserDiv>
            <StyledImg src={avatarURLAuthor} alt={`Avatar of ${authorName}`} />
          </UserDiv>
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
              <form
                onSubmit={e => {
                  e.preventDefault()
                  console.log(e.target.value)
                }}
              >
                <InputDiv>
                  <input
                    type="radio"
                    name="option"
                    value="optionOne"
                    defaultChecked
                  />
                  <Label htmlFor="optionOne">
                    ...{question.optionOne.text}?
                  </Label>
                </InputDiv>
                <InputDiv>
                  <input type="radio" name="option" value="optionTwo" />
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