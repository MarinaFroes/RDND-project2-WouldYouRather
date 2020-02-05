import React, { Fragment, Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import LeaderBoard from './LeaderBoard'
// import Login from './Login'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import { handleInitialData } from '../actions/shared'

class App extends Component() {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <Fragment>
          <Nav userName={"Marina"} />
          {this.props.loading === true ? null : (
            <div className="App">
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/question/:question_id" component={QuestionPage} />
            </div>
          )}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)



