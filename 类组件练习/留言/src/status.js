import React, { Component } from "react";
class Status extends Component{
    render(){
        let {data,allselected,selectedDelete} = this.props;
        //所有被selected的数组数据
        let selectedData = data.filter(data=>data.selected);
        const ids = [];
        selectedData.forEach(element => {
            ids.push(element.id);
        });
        return <div className="sum">
        <label>
            <input type="checkbox" 
            checked={data.length === selectedData.length}
            onChange={({target}) => {
                allselected(target.checked)
            }}
            />
            <span>选中全部</span>
        </label>
        <a onClick={()=>{
            selectedDelete(ids)
        }}>删除选中项</a>
    <p>当前选中{selectedData.length}项，共{data.length}条留言</p>
    </div>
    }
}
export default Status