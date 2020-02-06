import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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

const Button = styled.button`
  background-color: #e6e6e6;
  color: #000;
  width: 70%;
  margin: 2rem;
  border: none;
  border-radius: 5px;
  padding: 3px;
  font-weight: bold;
  &:hover {
    background-color: #bfbfbf;
    cursor: pointer;
  }
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

class Question extends Component {
  render(){
    const { avatarURL, userName, question, answered } = this.props
    
    return (
      <StyledContainer id={question.id}>
        <Title titleColor={answered.includes(question.id) && "#e6e6e6"}>
          <p>{`${userName} asks:`}</p>
        </Title>
        <StyledDiv>
          <UserDiv>
            <StyledImg src={avatarURL} alt={`Avatar of ${userName}`} />
          </UserDiv>
          <QuestionDiv>
            <h3>Would you rather...</h3>
            {answered.includes(question.id) ? (
              <div>
                <p>
                  {question.optionOne.text} or {question.optionTwo.text}?
                </p>
                <Button>Check results</Button>
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
  const answered = Object.keys(users[authedUser].answers)
  
  return {
    question,
    avatarURL: users[userId].avatarURL,
    userName: users[userId].name,
    answered
  }
}

export default connect(mapStateToProps)(Question)

  /*
  // Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
  */