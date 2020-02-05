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
  list-style-type: none;
  color: "red";
  padding: 10px;
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

function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <Link to="/" exact>
            Home
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/add" exact>
            New Question
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/leaderboard" exact>
            Leader Board
          </Link>
        </StyledLi>
      </StyledUl>
      <UserDiv>
        <GreetingSpan>Hello, UserName!</GreetingSpan>
        <StyledImg
          src="https://picsum.photos/seed/picsum/50/50"
          alt="Avatar of UserName"
        />
        <StyledButton>
          Logout
        </StyledButton>
      </UserDiv>
    </StyledNav>
  )
}

export default Nav