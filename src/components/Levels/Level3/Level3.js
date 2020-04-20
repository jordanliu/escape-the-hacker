import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Level3.scss"

const Level3 = () => {
  const history = useHistory()
  const [password, setPassword] = useState()

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    if (password === "BOBKILLSCATS") {
      return history.push("/level/4")
    }
  }, [password, history])

  return (
    <div className="level3-wrapper">
      <div className="paper">
        <div className="paper__wrapper">
          <section className="paper__content">
            <h1>DISCARD AFTER USE</h1>
            <p>TO BOB</p>
            <p>
              Hey Bob, we recently had a security breach so we had to change the
              team's password for the server login. The password is:
              IVIRPSSZJHAZ, the shift is 3 + 5 - 4 - 1 - 5 - 2 - 1 + 5 + 5 + 2.
              Figure it out, smarty pants. Please tear this up and discard it
              properly after use.
            </p>
            <span className="coffee-stain"></span>
          </section>
        </div>
      </div>
      <div className="input">
        <p>You found this piece of paper in the garbage</p>
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
      </div>
    </div>
  )
}

export default Level3
