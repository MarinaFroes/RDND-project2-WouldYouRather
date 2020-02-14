import React, { Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Home from './Home'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Nav from './Nav'
import Footer from './Footer'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import { handleInitialData } from '../actions/shared'
import PrivateRoute from './PrivateRoute'

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const ContentWraper = styled.div`
  flex: 1;
`

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    
    return (
      <Router>
        <PageContainer>
          <ContentWraper>
            {this.props.loading === true ? (
              <Route path="/" exact component={Login} />
            ) : (
              <div className="App">
                <Nav
                  userName={this.props.userName}
                  avatarURL={this.props.avatarURL}
                />
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/add" exact component={NewQuestion} />
                <PrivateRoute path="/leaderboard" exact component={LeaderBoard} />
                <PrivateRoute path="/question/:question_id" component={QuestionPage} />
              </div>
            )}
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
    userName: authedUser !== null && users[authedUser].name,
    avatarURL: authedUser !== null && users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(App)



