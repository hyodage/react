import React, { Component } from "react";
import List from './list';
class messageList extends Component {
    render() {
        let { data,remove } = this.props
        return <ul className="messageList">
            {data.map((item, index) => {
                return <List
                    data={item}
                    key={item.id}
                    remove={remove}
                />
            })
            }
        </ul>
    }
}
export default messageList