import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
function Sum() {
    const data = useSelector(state => state.data);
    const selectData = data.filter(item => item.selected);
    const ids = [];
    selectData.forEach(element => {
        ids.push(element.id);
    });
    let dispatch = useDispatch();
    return <div className="sum">
        <label>
            <input type="checkbox"
            checked={data.length === selectData.length}
            onChange={({target}) => {
                dispatch({
                    type:"ALLSELECTED",
                    selected:target.checked
                })
            }}
            />
            <span>选中全部</span>
        </label>
        <a onClick={()=>{
            dispatch({
                type:"ALLDELETE",
                ids:ids
            })
        }}>删除选中项</a>
        <p>当前选中{selectData.length}项，共{data.length}条留言</p>
    </div>
}
export default Sum;