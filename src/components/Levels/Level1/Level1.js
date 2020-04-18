import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Level1.scss"

const Level1 = () => {
  const history = useHistory()
  const [password, setPassword] = useState()
  let strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (strongRegex.test(password)) {
      return history.push("/level/2")
    }
  }

  return (
    <div className="level1-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Level1
