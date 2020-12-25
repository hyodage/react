//component/list
import React from "react";
import { useParams } from "react-router-dom";
import data from "../static/data";
/*
  每页显示 5 条
*/
export default function List() {
  const {type="all",page=1} = useParams();
  let nowData=[];
  if(type==="all"){
      let arr = Object.keys(data);
      arr.forEach(element => {
          nowData = [...nowData,...data[element]]
      });
  }else{
    nowData = data[type];//该类型的全部数据
  }
  const len = 5; //每页显示5条
  let start = (page-1)*len;//起始id
  let end  = start + len;//结束id
  nowData = nowData.filter((item,index)=>(index>=start&&index<end));//该页的5条数据
  return <ul className="list">
      {nowData.length?nowData.map(item=><li key={item.id}>{item.title}</li>):"暂无数据"}
</ul>
}