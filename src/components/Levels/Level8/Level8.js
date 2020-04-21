import React from "react"
import { Link } from "react-router-dom"
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
    if (strongRegex.test(password)) {
      return history.push("/level/win")
    }
  }
  
  return (
<div className="wrapper">
  <form className="form-signin" onSubmit={handleSubmit}>       
    <h2 className="form-signin-heading">Wifi Settings</h2>
    <input type="text" className="form-control" name="name" placeholder="ADMIN" disabled />
    <input type="text" autoComplete="off" className="form-control" id="passsword" name="password" placeholder=" Change Password"  onChange={(e) => setText(e.target.value)}/> 
    <br></br>    
    <br></br>
    <label className="checkbox">
      <input type="checkbox" defaultValue="remember-me" id="rememberMe" name="rememberMe" /> Remember Password
    </label> <br></br>
    <br></br>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Change</button>&nbsp; 
  </form>
</div>


	
  )
}

export default Level8
