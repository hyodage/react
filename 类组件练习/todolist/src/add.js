import React, { Component } from "react";
class Add extends Component {
    state = {
        val:''
    }
    render() {
        let {addTodo} = this.props;
        let {val} = this.state;
        return <div id="create-todo">
        <input id="new-todo" 
        placeholder="What needs to be done?" 
        type="text" 
        value={val} 
        onChange={({target})=>{
            this.setState({
                val:target.value
            })
        }}
        onKeyDown={({keyCode})=>{
            if(keyCode===13&&val.trim()){
                addTodo(val);
                this.setState({
                    val:''
                })
            }
        }}
        />
        </div>
    }
}
export default Add;