import React from "react"
import Add from "./Add"
import List from "./List"
import Sum from "./Sum"
import "./static/index.css"
function App(){
    return <div id="todoapp">
    <div className="title">
      <h1>todo</h1>
    </div>
    <div className="content">
      <Add />
      <List/>
      <Sum />
    </div>
  </div>
}
export default App