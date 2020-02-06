import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


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
  background-color: ${props => props.userAnswer || "#fff"};
  margin: 1rem;
`

class QuestionDetails extends Component {
  render() {
    const { avatarURL, userId, userName, question, authedUserAnswers } = this.props
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    
    return (
      <StyledContainer id={question.id}>
        <Title
          titleColor={authedUserAnswers.includes(question.id) && "#e6e6e6"}
        >
          <p>{`${userName} asks:`}</p>
        </Title>
        <StyledDiv>
          <UserDiv>
            <StyledImg src={avatarURL} alt={`Avatar of ${userName}`} />
          </UserDiv>
          <QuestionDiv>
            <h3>Would you rather...</h3>
            {authedUserAnswers.includes(question.id) ? (
              <div>
                <OptionDiv
                  userAnswer={
                    question.optionOne.votes.includes(userId) && "#e6e6e6"
                  }
                >
                  <p>...{question.optionOne.text}</p>
                  <p>
                    Votes: {question.optionOne.votes.length} out of {totalVotes}{" "}
                    ({question.optionOne.votes.length / totalVotes * 100}%)
                  </p>
                </OptionDiv>
                <OptionDiv
                  userAnswer={
                    question.optionTwo.votes.includes(userId) && "#e6e6e6"
                  }
                >
                  <p>...{question.optionTwo.text}</p>
                  <p>
                    Votes: {question.optionTwo.votes.length} out of {totalVotes}{" "}
                    ({question.optionTwo.votes.length / totalVotes * 100}%)
                  </p>
                </OptionDiv>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault()
                  console.log(e.target.value)
                }}
              >
                <input type="radio" name="option" value="optionOne" />
                {question.optionOne.text}
                <br />
                <input type="radio" name="option" value="optionTwo" />
                {question.optionTwo.text}
                <br />
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
  const userId = question.author

  return {
    question,
    userId,
    avatarURL: users[userId].avatarURL,
    userName: users[userId].name,
    authedUserAnswers: Object.keys(users[authedUser].answers)
  }
}

export default connect(mapStateToProps)(QuestionDetails)