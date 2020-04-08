import React from "react"
import "./App.scss"
import { MemoryRouter as Router, Route } from "react-router-dom"
import { Home, Timer } from "./components"

const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/level" component={Timer} />
    </Router>
  )
}

export default App
