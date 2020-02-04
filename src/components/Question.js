import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  border-radius: 50%;
  padding: 0 20px;
`

const StyledContainer = styled.div`
  border: 2px solid #e8e9eb;
  border-radius: 5px;
  width: 50%;
`

const QuestionDiv = styled.div`
  width: 100%;
`

const Title = styled.div`
  display: flex;
  border-bottom: 2px solid #e8e9eb;
`

const Button = styled.button`
  background-color: #3283a8;
  color: #f0f0f0;
  width: 70%;
  margin: 2rem;
`

function Question({userName, userId, avatarURL, optionOne, optionTwo}) {
  return (
    <StyledContainer>
      <Title>
        <StyledImg src={avatarURL} alt={`Avatar de ${userName}`} />
        <p>{`${userName} asks:`}</p>
      </Title>
      <QuestionDiv>
        <h3>Would you rather...</h3>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(e.target.value)
        }}>
          <input type="radio" name="option" value="optionOne" />{optionOne}<br/>
          <input type="radio" name="option" value="optionTwo" />{optionTwo}<br/>
          <Button type="submit">Submit</Button>
        </form>
      </QuestionDiv>
    </StyledContainer>
  )
}

export default Question