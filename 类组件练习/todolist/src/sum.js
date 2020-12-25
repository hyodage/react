import React, { Component } from "react";
class Sum extends Component {
  render() {
    let { data ,clearDone,deletedSeleted} = this.props;
    const doneData = data.filter(item => item.done);
    //获取doneData的id数组
    let ids = [];
    ids = doneData.map((item)=>item.id);

    //获取选中的数据
    const selectData = data.filter(item => item.selected);
    //获取doneData的id数组
    let selectids = [];
    selectids = selectData.map((item)=>item.id);

    return <div id="todo-stats">
      <span className="todo-count">
        <span className="number">{data.length - doneData.length}</span>
        <span className="word">项待完成||<a
          onClick={()=>{
            deletedSeleted(selectids);
          }}
          >删除选中</a></span>
      </span>
      <span className="todo-clear">
      <a onClick={() => {
        clearDone(ids);
      }}>Clear <span>{doneData.length}</span> 已完成事项</a></span>
    </div>
  }
}
export default Sum;