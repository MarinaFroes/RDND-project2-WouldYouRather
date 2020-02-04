import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid red;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 2px solid blue;
`

const StyledLi = styled.li`
  list-style-type: none;
  color: "red";
  padding: 10px;
  border: 2px solid green;
`

const StyledImg = styled.img`
  border-radius: 50%;
`

const GreetingSpan = styled.span`
  font-weight: normal;
  padding: 10px;
`

const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid orange;
  padding: 10px;
`

const StyledButton = styled.button`
  background-color: grey;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
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