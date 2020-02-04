import React, { Fragment } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import LeaderBoard from './LeaderBoard'
// import Login from './Login'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'

function App() {
  return (
    <Router>
      <Fragment>
        <Nav />
        <div className="App">
          <Route to="/" exact component={Home} />
          <Route to="/add" component={NewQuestion} />
          <Route to="/leaderboard" component={LeaderBoard} />
          <Route to="/question/:question_id" component={QuestionPage} />
        </div>
      </Fragment>
    </Router>
  )
}

export default App;
