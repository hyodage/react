import React, {Component } from "react";
// 子组件中有一个属性叫做 props，通过 props 可以接收父级传递过来的信息
class List extends Component {
    state={
        show:false
    }
    render() {
        console.log(this.props);
        let {data} = this.props;
        let {show} = this.state;
        return <dl className = {`friend-group ${show?'expanded':''}`}>
            <dt onClick={()=>{
                this.setState({
                    show:!show
                })
            }}>{data.title}</dt>
            {data.list.map((item,index) => {
                return <dd key={index}>{item.name}</dd>
            })}
        </dl>
    }
}
export default List