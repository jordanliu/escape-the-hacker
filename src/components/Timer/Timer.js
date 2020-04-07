import React from "react"
import "./Timer.scss"
import { Switch, Route } from "react-router-dom"
import { Question, Level1 } from "../../components"
const Timer = () => {
  return (
    <div>
      <div className="timer-wrapper">
        <h1 className="timer">10:00</h1>
      </div>
      <Switch>
        <Route exact path="/start" component={Question} />
        <Route exact path="/start/2" component={Level1} />
      </Switch>
    </div>
  )
}

export default Timer
