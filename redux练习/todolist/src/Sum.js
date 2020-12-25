import React from "react";
import {useSelector,useDispatch} from "react-redux"
function Sum(){
  const data = useSelector(state=>state.data);
  //done
  const doneData = data.filter(item => item.done);
  const doneids = [];
  doneData.forEach(element => {
      doneids.push(element.id);
  });
  //selected
  const selectedData = data.filter(item => item.selected);
  const selectedids = [];
  selectedData.forEach(element => {
    selectedids.push(element.id);
  });
  let dispatch = useDispatch();
return <div id="todo-stats">
  <span className="todo-count">
    <span className="number">{data.length-doneData.length}</span>
    <span className="word">项待完成||<a
    onClick={()=>{
      dispatch({
        type:"SELECTEDDELETE",
        selectedids:selectedids
      })
    }}
    >删除选中</a></span>
  </span>
  <span className="todo-clear">
    <a onClick={()=>{
      dispatch({
        type:"DONEDELETE",
        doneids:doneids
      })
    }}>Clear <span>{doneData.length}</span> 已完成事项</a>
  </span>
</div>
}
export default Sum