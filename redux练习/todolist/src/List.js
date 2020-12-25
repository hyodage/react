import React from "react";
import Li from "./Li"
import {useSelector} from "react-redux";
function List() {
  const data = useSelector(state=>state.data);
  return <ul id="todo-list">
    {data.map(item=><Li
            key={item.id}
            data={item}
        />)}
  </ul>
}
export default List