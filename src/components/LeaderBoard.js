import React, { Component } from 'react'
import styled from 'styled-components'

import User from './User'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class LeaderBoard extends Component {
  render() {
    return (
      <Main>
        <h2>Leader Board</h2>
        <User
          position={1}
          userName="Sarah Edo"
          avatarURL="https://picsum.photos/id/1027/200/200"
          questions={10}
          answers={5}
          score={10 + 5}
        />
        <User
          position={1}
          userName="Sarah Edo"
          avatarURL="https://picsum.photos/id/1027/200/200"
          questions={10}
          answers={5}
          score={10 + 5}
        />
        <User
          position={1}
          userName="Sarah Edo"
          avatarURL="https://picsum.photos/id/1027/200/200"
          questions={10}
          answers={5}
          score={10 + 5}
        />
      </Main>
    )
  }
}

export default LeaderBoard