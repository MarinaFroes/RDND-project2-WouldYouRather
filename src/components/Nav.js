import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;
`

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: #bfbfbf;
  }
`

const StyledImg = styled.img`
  border-radius: 50%;
  height: 40px;
`

const GreetingSpan = styled.span`
  font-weight: normal;
  padding: 10px;
`

const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const StyledButton = styled.button`
  background-color: #e6e6e6;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 10px;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background-color: #bfbfbf;
  }
`

function Nav({ userName, avatarURL }) {
  if (!userName) {
    userName = 'there'
  }
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/" exact>
            Home
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/add" exact>
            New Question
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/leaderboard" exact>
            Leader Board
          </StyledLink>
        </StyledLi>
      </StyledUl>
      <UserDiv>
        <GreetingSpan>Hello, {userName}!</GreetingSpan>
        <StyledImg
          src={avatarURL}
          alt={`Avatar of ${userName}`}
        />
        <StyledButton>Logout</StyledButton>
      </UserDiv>
    </StyledNav>
  )
}

export default Nav