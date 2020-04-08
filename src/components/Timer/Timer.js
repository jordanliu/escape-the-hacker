import React, { useEffect } from "react"
import "./Timer.scss"
import { Switch, Route, useHistory, useLocation } from "react-router-dom"
import {
  Win,
  Lose,
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
  Level6,
  Level7,
  Level8,
} from "../../components"
import { useTimer } from "react-timer-hook"

const Timer = () => {
  const history = useHistory()
  const location = useLocation()
  const time = new Date()

  time.setSeconds(time.getSeconds() + 600) // 10 minutes timer

  const expiryTimestamp = time

  const { seconds, minutes, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => handleOnExpire(),
  })

  const handleOnExpire = () => {
    return history.push("/level/lose")
  }

  useEffect(() => {
    const currentPath = location.pathname
    if (currentPath === "/level/win") {
      pause()
    }
  }, [location, pause])

  return (
    <div>
      <div className="timer-wrapper">
        <h1 className="timer">
          {minutes}:{seconds}
        </h1>
      </div>
      <Switch>
        {/* <Route exact path="/start" component={Question} /> */}
        <Route exact path="/level/1" component={Level1} />
        <Route exact path="/level/2" component={Level2} />
        <Route exact path="/level/3" component={Level3} />
        <Route exact path="/level/4" component={Level4} />
        <Route exact path="/level/5" component={Level5} />
        <Route exact path="/level/6" component={Level6} />
        <Route exact path="/level/7" component={Level7} />
        <Route exact path="/level/8" component={Level8} />
        <Route exact path="/level/lose" component={Lose} />
        <Route exact path="/level/win" component={Win} />
      </Switch>
    </div>
  )
}

export default Timer
