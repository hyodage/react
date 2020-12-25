import React, { Component } from "react";
import Li from "./li"
class List extends Component {
    render() {
        let {data} = this.props;
        return <ul id="todo-list">
            {
                data.map((item)=>{
                    {/* 每次更新最好返回一个新的对象，否则没有办法区分更新前后的状态 */}
                    return <Li 
                        {...this.props}
                        data={item}
                        key={item.id}
                    /> 
                })
            }
      </ul>
    }
}
export default List;