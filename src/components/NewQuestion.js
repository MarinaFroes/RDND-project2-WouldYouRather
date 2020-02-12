import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../actions/questions'
import { handleUpdateUsers } from '../actions/users'
import CardTitle from './CardTitle'

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  width: 50%;
  margin-top: 2rem;
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
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

const InputDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
  padding: 0.5rem;
`

const StyledTextArea = styled.textarea`
  width: 70%;
  font-size: 1rem;
`

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  
  handleChange = e => {
    if (e.target.id === "optionOne") {
      this.setState({
        optionOneText: e.target.value
      })
    } else {
      this.setState({
        optionTwoText: e.target.value
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion({ optionOneText, optionTwoText }))
    dispatch(handleUpdateUsers())

    this.setState(prevState => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: !prevState.toHome
    }))
  }

  render() {
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to="/" />
    }

    return (
      <StyledContainer>
        <CardContainer>
          <CardTitle text={"Add your question:"} titleColor={"#ccedd5"} />
          <StyledDiv>
            <h3>Would you rather...</h3>
            <form onSubmit={this.handleSubmit}>
              <InputDiv>
                <label htmlFor="optionOne">
                  <p>Option one: </p>
                </label>
                <StyledTextArea
                  type="text"
                  name="option"
                  id="optionOne"
                  value={this.state.optionOneText}
                  onChange={this.handleChange}
                  placeholder="be happy living a lie"
                  maxlength="240"
                  required
                />
              </InputDiv>
              <InputDiv>
                <label htmlFor="optionTwo">
                  <p>Option two: </p>
                </label>
                <StyledTextArea
                  type="text"
                  name="option"
                  id="optionTwo"
                  value={this.state.optionTwoText}
                  onChange={this.handleChange}
                  placeholder="be sad knowing the truth"
                  maxlength="240"
                  required
                />
              </InputDiv>
              <Button type="submit">Submit</Button>
            </form>
          </StyledDiv>
        </CardContainer>
      </StyledContainer>
    )
  }
}

export default connect()(NewQuestion)
