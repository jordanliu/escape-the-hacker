import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDencrypt } from "use-dencrypt-effect"
import "./Home.scss"

const Home = () => {
  const values = ["Escape the Hacker"]
  const { result, dencrypt } = useDencrypt()

  useEffect(() => {
    let i = 0

    const action = setInterval(() => {
      dencrypt(values[i])

      i = i === values.length - 1 ? 0 : i + 1
    }, 0)

    return () => clearInterval(action)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="home-wrapper">
      <h1>{result}</h1>
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
