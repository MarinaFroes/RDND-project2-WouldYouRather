import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/questions'

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuestionContainer = styled.div`
  border: 2px solid #e8e9eb;
  border-radius: 5px;
  width: 50%;
  margin-top: 2rem;
`

const Title = styled.div`
  display: flex;
  border-bottom: 2px solid #e8e9eb;
  padding-left: 20px;
  background-color: #e6e6e6;
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
    optionTwoText: ''
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
   
    const {optionOneText, optionTwoText} = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion({
      optionOneText,
      optionTwoText
    }))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
  }

  render() {
    return (
      <StyledContainer>
        <QuestionContainer>
          <Title>
            <p>Add your question:</p>
          </Title>
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
        </QuestionContainer>
      </StyledContainer>
    )
  }
}

export default connect()(NewQuestion)
