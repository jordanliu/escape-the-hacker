import React from "react"
import "./Timer.scss"
import { Switch, Route } from "react-router-dom"
import { Question, Level1 } from "../../components"
import { useTimer } from "react-timer-hook"
const Timer = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600) // 10 minutes timer
  let expiryTimestamp = time
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => alert("You lose!"),
  })
  return (
    <div>
      <div className="timer-wrapper">
        <h1 className="timer">
          {minutes}:{seconds}
        </h1>
      </div>
      <Switch>
        <Route exact path="/start" component={Question} />
        <Route exact path="/start/2" component={Level1} />
      </Switch>
    </div>
  )
}

export default Timer
