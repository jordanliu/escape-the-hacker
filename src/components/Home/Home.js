import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>Escape the Hacker</h1>
      <p>
        You’re a CS incident response expert dealing with an ongoing attack, the
        hacker is giving you clues how he got access to the system. You’re job
        is to identify the method and implement the defensive strategy to stop
        the attack.
      </p>
      <button>
        <Link to="/start">>START</Link>
      </button>
    </div>
  )
}

export default Home
