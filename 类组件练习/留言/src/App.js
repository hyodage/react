import React, { Component } from "react";
import './index.css'
import AddMessage from './addMessage'
import MessageList from './messageList'
import Status from './status'
class App extends Component {
    state = {
        data: [
            {
                id: 0,
                name: '张三',
                title: "这是第一条留言",
                selected: false
            }, {
                id: 1,
                name: '李四',
                title: "这是第二条留言",
                selected: true
            }

        ]
    }
    add = (name, title) => {
        let { data } = this.state;
        data.push({
            id: Date.now(),
            name: name,
            title: title,
            selected:false
        });
        this.setState({
            data
        })
    }
    remove = (id) => {
        let { data } = this.state;
        this.setState({
            data: data.filter(item => item.id !== id)
        })
    }
    cgselected = (id) => {
        let { data } = this.state;
        for(let i=0;i<data.length;i++){
            if(id === data[i].id){
                let selected = !data[i].selected;
                data[i] = {...data[i],selected:selected}
                break;
            }
        }
        this.setState({
            data
        })
    }
    allselected = (selected) => {
        let { data } = this.state;
        data.forEach((item,index)=>{
            data[index] = {
                ...item,
                selected:selected
            }
        })
        this.setState({
            data
        })
    }
    editLy = (id,title) =>{
        let { data } = this.state;
        for(let i=0;i<data.length;i++){
            if(id === data[i].id){
                data[i] = {...data[i],title:title}
                break;
            }
        }
        this.setState({
            data
        })
    }
    selectedDelete = (ids) => {
        let { data } = this.state;
        ids.forEach(element => {
            data = data.filter(function(el) {
                return element !== el.id;
            })
        });
        this.setState({
            data
        })
    }
    render() {
        let { data } = this.state;
        return <section className="wrap">
            <h2 className="title">留言板</h2>
            <AddMessage add={this.add} />
            <MessageList
                data={data}
                remove={this.remove}
                cgselected={this.cgselected}
                editLy={this.editLy}
            />
            <Status data={data}
            allselected={this.allselected}
            selectedDelete={this.selectedDelete}
            />
        </section>
    }
}
export default App;