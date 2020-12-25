import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
function Li(props) {
  let { id, message, done, selected } = props.data;
  const dispatch = useDispatch();
  let [edit, setEdit] = useState(false);//控制样式是否进入编辑状态
  const [editVal, setEditVal] = useState(message);//存储点击前的message
  let editText = useRef();
  useEffect(() => {
    if (edit) {
      editText.current.focus();
    }
  }, [edit])
  return <li className={edit ? "editing" : ""}>
    <div className={`todo ${done ? 'done' : ''}`}>
      <div className="display">
        <input className="check" type="checkbox"
          checked={selected}
          onChange={({ target }) => {
            dispatch({
              type: "SELECTED",
              id,
              selected: target.checked
            })
          }}
        />
        <div className="todo-content"
          onDoubleClick={() => {
            setEdit(true);
          }}
        >{message}</div>
        <span className="todo-destroy"
          onClick={() => {
            dispatch({
              type: "CHANGEDONE",
              id
            })
          }}
        ></span>
      </div>
      <div className="edit">
        <input ref={editText} className="todo-input" type="text"
          value={editVal}
          onChange={({ target }) => {
            setEditVal(target.value);
          }}
          onBlur={() => {
            if (editVal.trim()) {
              dispatch({
                type: "EDIT",
                id,
                message: editVal
              })
            } else {
              setEditVal(message)
            }
            setEdit(false);
          }}
        />
      </div>
    </div>
  </li>
}
export default Li