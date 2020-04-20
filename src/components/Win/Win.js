import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDencrypt } from "use-dencrypt-effect"
import "./Win.scss"

const Win = () => {
  const values = ["YOU WIN!"]
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
    <div className="win-wrapper">
      <h1>{result}</h1>
      <span>
        WOULD YOU LIKE TO <Link to="/">[PLAY AGAIN]</Link> or{" "}
        <a href="https://github.com/jordanliu/escape-the-hacker">
          [VIEW SOURCE CODE]
        </a>
        ?
      </span>
    </div>
  )
}

export default Win
