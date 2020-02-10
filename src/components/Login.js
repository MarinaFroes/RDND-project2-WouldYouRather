import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { FaMapSigns } from 'react-icons/fa'

import CardTitle from './CardTitle'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`
const CardContainer = styled.div`
  border-radius: 5px;
  width: 50%;
  margin-top: 2rem;
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
`

const CardDiv = styled.div`
  display: flex;
`
const StyledForm = styled.form`
  width: 70%;
  padding: 2rem;
  font-size: 1rem;
`

const Button = styled.button`
  background-color: #e6e6e6;
  color: #000;
  margin-top: 2rem;
  width: 100%;
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

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #339933;
  font-size: 4rem;
  border-right: 2px solid #e6e6e6;
  margin: 1rem 0;
  width: 30%;
`

const StyledSpan = styled.span`
  padding-right: 1rem;
`

class Login extends Component {
  state = {
    value: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleSetAuthedUser(this.state.value))
    
    this.setState({
      value: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { usersIds } = this.props

    return (
      <Main>
        <h1>Would you rather game</h1>
        <CardContainer>
          <CardTitle
            text={"Please, login to play the game: "}
            titleColor={false}
            timestamp={null}
          />
          <CardDiv>
            <StyledIcon>{<FaMapSigns />}</StyledIcon>
            <StyledForm onSubmit={this.handleSubmit}>
              <label>
                <StyledSpan>Choose a user:</StyledSpan>
                <select onChange={this.handleChange}>
                  <option value="" disabled selected>
                    Select your user
                  </option>
                  {usersIds.map(id => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
              </label>
              <Button type="submit" disabled={this.state.value === ""}>
                Submit
              </Button>
            </StyledForm>
          </CardDiv>
        </CardContainer>
      </Main>
    )
  }
}

function mapStateToProps({ users }) {
  return { 
    usersIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login) 