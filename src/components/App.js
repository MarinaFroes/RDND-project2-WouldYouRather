import React, { Fragment, Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Nav from './Nav'
import Footer from './Footer'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData()).then(() => console.log(this.props))
  }

  render() {
    
    return (
      <Router>
        <Fragment>
          {this.props.loading === true
            ? <Route path="/" exact component={Login} />
           : (
            <div className="App">
              <Nav
                userName={this.props.userName}
                avatarURL={this.props.avatarURL}
              />
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/question/:question_id" component={QuestionPage} />
              <Footer />
            </div>
          )}
        </Fragment>
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



