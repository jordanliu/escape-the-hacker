import React, { useState } from "react"
import { Link } from "react-router-dom"

const Level6 = () => {
  const [state, setState] = useState()

  console.log(state)
  return (
    <div>
      <input type="text" onChange={(e) => setState(e.target.value)} />
    </div>
  )
}

export default Level6
