import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #e6e6e6;
  color: #000;
  margin: 2rem;
  width: 60%;
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

function SubmitButton() {
  return (
    <StyledButton type="submit">
      Submit
    </StyledButton>
  )
}

export default SubmitButton
