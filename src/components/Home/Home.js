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
    <div>
      <div className="mobile">
        Not compatible with mobile phones. Coming soon{" "}
        <span role="img" aria-label="smile">
          😃
        </span>
      </div>
      <div className="home-wrapper">
        <h1>{result}</h1>
        <p>
          You’re a CS incident response expert dealing with an ongoing attack,
          the hacker is giving you clues on how he got access to the system.
          Your job is to solve the hacker's puzzle to stop the attack.
        </p>
        <button>
          <Link to="/level/1">>START</Link>
        </button>
        <span>Time Limit: 10 minutes</span>

        <span className="footer">
          To promote cyberawareness, see{" "}
          <a href="https://github.com/jordanliu/escape-the-hacker">
            source code
          </a>
          .
        </span>
      </div>
    </div>
  )
}

export default Home
