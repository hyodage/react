import React, { PureComponent } from "react";
class list extends PureComponent{
    render(){
        let {data,remove} = this.props;
        console.log(data.name,data.title);
        return <li>
        <h3>{data.name}</h3>
        <p>{data.title}</p>
        <a onClick={()=>{
            remove(data.id)
        }}>删除</a>
    </li>
    }
}
export default list