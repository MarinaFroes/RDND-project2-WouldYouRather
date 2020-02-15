import React, { Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Home from './Home'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import Footer from './Footer'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import { handleInitialData } from '../actions/shared'
import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
`

const ContentWraper = styled.div`
  flex: 1;
`

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { loading, userName, avatarURL } = this.props

    return (
      <Router>
        <PageContainer>
          <ContentWraper>
            {
              loading === true || (
                <Nav
                  userName={userName}
                  avatarURL={avatarURL}
                />
              )
            }
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/add" exact component={NewQuestion} />
              <PrivateRoute path="/leaderboard" exact component={LeaderBoard} />
              <PrivateRoute path="/question/:question_id" exact component={QuestionPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ContentWraper>
          <Footer />   
        </PageContainer>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    userName: authedUser !== null ? users[authedUser].name : 'there',
    avatarURL: authedUser !== null ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(App)



