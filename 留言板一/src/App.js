import React, { Component } from "react";
import './index.css'
import AddMessage from './addMessage'
import MessageList from './messageList'
class App extends Component {
  state={
    data:[
        {
           id: 0,
           name:'张三',
           title: "这是第一条留言"
        }
      ]
  }
  add=(name,title)=>{
    let {data} = this.state;
    data.push({
      id: Date.now(),
      name:name,
      title:title
    });
    this.setState({
      data
    })
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  render() {
    let {data} = this.state;
    return <section className="wrap">
    <h2 className="title">留言板</h2>
    <AddMessage
    add={this.add}
    />
    <MessageList
    data={data}
    remove={this.remove}
    />
</section>
  }
}
export default App;