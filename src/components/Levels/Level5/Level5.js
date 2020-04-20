import React from "react"
import { Link } from "react-router-dom"
import qr from "./qr.png"
import "./Level5.scss"

const Level5 = React.memo(() => {
  return (
    <div className="level5-wrapper">
      <span className="hidden">
        <Link to="/level/6">Click Here</Link>
      </span>
      <img src={qr} alt="qr code" />
    </div>
  )
})

export default Level5
