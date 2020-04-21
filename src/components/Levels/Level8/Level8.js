import React from "react"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import "./Level8.scss"

const Level8 = () => {
  const history = useHistory()
  const [password, setText] = useState()
  let strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{9,})"
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (strongRegex.test(password)) {
      return history.push("/level/win")
    }
  }

  return (
    <div className="level8-wrapper">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">WIFI Settings</h2>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="MX5185"
          disabled
        />
        <input
          type="password"
          autoComplete="off"
          className="form-control"
          id="passsword"
          name="password"
          placeholder=" Change Password"
          onChange={(e) => setText(e.target.value)}
        />
        <br></br>
        <br></br>
        <label className="checkbox">
          <input
            type="checkbox"
            defaultValue="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{" "}
          Remember Password
        </label>{" "}
        <br></br>
        <br></br>
        <button className="btn btn-lg btn-primary btn-block">Change</button>
      </form>
    </div>
  )
}

export default Level8
