import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDencrypt } from "use-dencrypt-effect"
import "./Lose.scss"

const Lose = () => {
  const values = ["YOU LOSE!"]
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
    <div className="lose-wrapper">
      <h1>{result}</h1>
      <span>
        WOULD YOU LIKE TO <Link to="/">[TRY AGAIN]</Link> or{" "}
        <a href="https://github.com/jordanliu/escape-the-hacker">
          [SEE SOURCE CODE]
        </a>
        ?
      </span>
    </div>
  )
}

export default Lose
