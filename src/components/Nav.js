import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { logout } from '../actions/authedUser'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;

  @media only screen and (max-width: 500px){
    font-size: 0.8rem;
  }
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

  @media only screen and (max-width: 500px){
    display: none;
  }
`

const GreetingSpan = styled.span`
  font-weight: normal;
  padding: 10px;

  @media only screen and (max-width: 500px){
    display: none;
  }
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

  @media only screen and (max-width: 500px){
    font-size: 0.8rem;
    padding: 5px;
    margin: 5px;
  }
`

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
`

class Nav extends Component {
  
  handleClick = (e) => {
    e.preventDefault()
    const { dispatch, history } = this.props

    dispatch(logout())

    history.push("/")
  }

  render() {
    const { userName, avatarURL } = this.props
    
    if (!userName) {
       return (<ErrorMessage>Error</ErrorMessage>)
    }

    return (
      <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/" >
            Home
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/add" >
            New Question
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/leaderboard" >
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
        <StyledButton onClick={this.handleClick}>Logout</StyledButton>
      </UserDiv>
    </StyledNav>
    )
  }
}

export default withRouter(connect()(Nav))