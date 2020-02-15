import React from 'react'
import styled from 'styled-components'
import { FaRegSadTear } from 'react-icons/fa'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #586b5d;
`

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #586b5d;
  font-size: 4rem;
  margin: 2rem;
`

const StyledH1 = styled.h1`
  font-size: 5rem;
`

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem;
  text-align: center;
`

function NotFound() {
  return (
    <>
      <StyledDiv>
        <StyledIcon>{<FaRegSadTear />}</StyledIcon>
        <StyledH1>404</StyledH1>
      </StyledDiv>
      <Text>Sorry, this page doesn't exist</Text>
      <Text>Go back to <a href="/">Home</a> page</Text>
    </>
  )
}

export default NotFound
