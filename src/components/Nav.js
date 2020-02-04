import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" exact activeClassName="active">
            Home
          </Link>
          <Link to="/add" exact activeClassName="active">
            New Question
          </Link>
          <Link to="/leaderboard" exact activeClassName="active">
            Leader Board
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav