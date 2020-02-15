import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authedUser } = rest
  return (
  <Route {...rest} render={(props) => (
    authedUser === true
      ? <Component {...props} />
      : <Redirect to='/' />
    ) 
  }/>
)}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(PrivateRoute)