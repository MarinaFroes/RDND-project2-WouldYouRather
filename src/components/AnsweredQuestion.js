import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'

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

const StyledIcon = styled.div`
  color: ${props => props.userAnswer || "#fff"};
  font-size: 2rem;
  margin-right: 1rem;
`

function AnsweredQuestion({
  totalVotes,
  userAnswer,
  votesOptionOne,
  votesOptionTwo,
  optionOneText,
  optionTwoText
}) {
  
  return (
    <div>
      <OptionDiv userAnswer={userAnswer === "optionOne" && "#ccedd5"}>
        <TextDiv>
          <p>...{optionOneText}</p>
          <p>
            <strong>Votes:</strong> {votesOptionOne} out of {totalVotes} (
            {((votesOptionOne / totalVotes) * 100).toFixed(2)}
            %)
          </p>
        </TextDiv>
        <StyledIcon userAnswer={userAnswer === "optionOne" && "green"}>
          {<FaCheckCircle />}
        </StyledIcon>
      </OptionDiv>
      <OptionDiv userAnswer={userAnswer === "optionTwo" && "#ccedd5"}>
        <TextDiv>
          <p>...{optionTwoText}</p>
          <p>
            <strong>Votes:</strong> {votesOptionTwo} out of {totalVotes} (
            {((votesOptionTwo / totalVotes) * 100).toFixed(2)}
            %)
          </p>
        </TextDiv>
        <StyledIcon userAnswer={userAnswer === "optionTwo" && "green"}>
          {<FaCheckCircle />}
        </StyledIcon>
      </OptionDiv>
    </div>
  )
}

export default AnsweredQuestion