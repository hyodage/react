import React,{ useState } from "react";
import {useDispatch} from "react-redux"
function Add(){
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    let dispatch = useDispatch();
    return <div className="addMessage">
        <input type="text" placeholder="请输入昵称" 
        value={name}
        onChange={({target})=>{
            setName(target.value);
        }}
        />
        <textarea placeholder="请输入留言"
        value={message}
        onChange={({target})=>{
            setMessage(target.value);
        }}
        ></textarea>
        <button onClick={()=>{
            if(name && message){
                dispatch({
                    type:"ADD",
                    name,
                    message
                })
                setName("");
                setMessage("");
            }else{
                alert('昵称或留言不能为空');
            }
        }}>提交留言</button>
    </div>
}
export default Add;