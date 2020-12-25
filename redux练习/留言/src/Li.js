import React,{useState,useEffect,useRef} from "react";
import {useDispatch} from "react-redux"
function Li(props) {
    let { id, name, message, selected } = props.data;
    let dispatch = useDispatch();
    let [edit,setEdit] = useState(false);//控制样式是否进入编辑状态
    const [editVal,setEditVal] = useState(message);//存储点击前的message
    let editText = useRef();
    useEffect(()=>{
        if(edit){
          editText.current.focus();
        }
    },[edit])
    return <li className={edit?"editing":""}>
        <h3>{name}</h3>
        <input type="checkbox" 
        checked={selected}
        onChange={({target})=>{
            dispatch({
                type:"SELECTED",
                id,
                selected:target.checked
            })
        }}
        />
        <p onDoubleClick={()=>{
            setEdit(true)
        }}>{message}</p>
        <textarea ref={editText}
        onBlur={()=>{
            if(editVal.trim()){
                dispatch({
                    type:"EDIT",
                    id,
                    message:editVal
                })
            }else{
                setEditVal(message)
            }
            setEdit(false);
        }}
        value={editVal}
        onChange={({target})=>{
            setEditVal(target.value);
        }}
        ></textarea>
        <a onClick={()=>{
            dispatch({
                type:"DELETE",
                id,
            })
        }}>删除</a>
    </li>
}
export default Li;