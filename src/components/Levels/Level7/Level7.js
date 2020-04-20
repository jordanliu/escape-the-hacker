import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Level7.scss"

const Level7 = () => {
  const history = useHistory()
  const [answer, setAnswer] = useState("")

  if (answer.toLowerCase() === "virtual private network") {
    history.push("/level/8")
  }
  return (
    <div className="level7-wrapper">
      <h2>
        Edward attempts to log on to a website to watch his favorite team play a
        football match. However, the website does not have "https", what could
        he use to help fight against eavesdropping and password sniffing?
      </h2>
      <input
        type="text"
        placeholder="Answer"
        onChange={(e) => {
          setAnswer(e.target.value)
        }}
      />
    </div>
  )
}

export default Level7
