import React, { Component, Fragment } from "react";
import Add from "./add"
import List from "./list"
import Sum from "./sum"
import './index.css'
class App extends Component {
    state = {
        data: [
            {
                id: 0,
                title: "这是第一条todo",
                done: false,
                selected: false
            }, {
                id: 1,
                title: "这是第二条todo",
                done: true,
                selected: true
            }
        ]
    }
    addTodo = (newTodo) => {
        let { data } = this.state;
        data.push({
            id: Date.now(),
            title: newTodo,
            done: false,
            selected: false
        })
        this.setState({
            data
        })
    }
    changeDone = (id) => {
        let { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                let done = !data[i].done
                data[i] = { ...data[i], done: done }
                break;
            }
        }
        this.setState({
            data
        })
    }
    editTitle = (id, title) => {
        let { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = { ...data[i], title }
                break;
            }
        }
        this.setState({
            data
        })
    }
    clearDone = (ids) => {
        let { data } = this.state;
        ids.forEach(element => {
            data = data.filter(function (el) {
                return element !== el.id;
            })
        });
        this.setState({
            data
        })
    }
    selectedList = (id) => {
        let { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                let selected = !data[i].selected
                data[i] = { ...data[i], selected: selected }
                break;
            }
        }
        this.setState({
            data
        })
    }
    deletedSeleted = (ids) => {
        let { data } = this.state;
        ids.forEach(element => {
            data = data.filter(function (el) {
                return element !== el.id;
            })
        });
        this.setState({
            data
        })
    }
    render() {
        let { data } = this.state;
        return <div id="todoapp">
            <div className="title">
                <h1>todo</h1>
            </div>
            <div className="content">
                <Add addTodo={this.addTodo} />
                {
                    data.length > 0 && (<Fragment>
                        <List
                            data={data}
                            changeDone={this.changeDone}
                            editTitle={this.editTitle}
                            selectedList={this.selectedList}
                        />
                        <Sum data={data} clearDone={this.clearDone} deletedSeleted={this.deletedSeleted} />
                    </Fragment>)
                }
            </div>
        </div>
    }
}
export default App;