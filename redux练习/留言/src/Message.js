import React from "react";
import Li from './Li'
import {useSelector} from "react-redux";
function Message(){
    const data = useSelector(state=>state.data);
    return <ul className="messageList">
        {data.map(item=><Li
            key={item.id}
            data={item}
        />)}
    </ul>
}
export default Message;