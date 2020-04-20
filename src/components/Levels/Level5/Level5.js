import React, { useRef } from "react"
//import { useHistory } from "react-router-dom"
import qr from "./qr.png"
import "./Level5.scss"

const Level5 = () => {
  // const history = useHistory()
  // const [text, setText] = useState("")
  const inputRef = useRef()
  // useEffect(() => {
  //   if (text === "T54321") {
  //     history.push("/level/6")
  //   }
  // }, [history, text])

  return (
    <div className="level5-wrapper">
      <img src={qr} alt="qr code" />
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default Level5
