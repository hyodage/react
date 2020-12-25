import React, { Component } from "react";
import List from "./list"
class messageList extends Component {
  render() {
    let {data,remove,cgselected,editLy} = this.props
    return <ul className="messageList">
      {data.map(item=>{
        return <List
          data={item}
          key={item.id}
          remove={remove}
          cgselected={cgselected}
          editLy={editLy}
        />
      })}
    </ul>
  }
}
export default messageList