import React, { Component } from "react";
class addMessage extends Component {
  state = {
    name: "",
    title: ""
  }
  render() {
    let { add } = this.props;
    let { name, title } = this.state;
    return <div className="addMessage">
      <input type="text" placeholder="请输入昵称"
        value={name}
        onChange={({ target }) => {
          this.setState({
            name: target.value
          })
        }}
      />
      <textarea placeholder="请输入留言"
        value={title}
        onChange={({ target }) => {
          this.setState({
            title: target.value
          })
        }}
        onKeyDown={({ keyCode }) => {
          if (keyCode === 13 && name.trim() && title.trim()) {
            add(name, title);
            this.setState({
              name:"",
              title: ""
            })
          }
        }}
      ></textarea>
      <button onClick={()=>{
        if (name.trim() && title.trim()) {
          add(name, title);
          this.setState({
            name:"",
            title: ""
          })
        }
      }}>提交留言</button>
    </div>
  }
}
export default addMessage