import React, { Component,createRef } from "react";
class Li extends Component {
    constructor(props){
        super(props);
        this.state = {
          edit:false,
          val:props.data.title 
        }
        //组件初始化时，在 state 中，复制了title
    }
    editText=createRef();
    display = createRef();
    componentDidUpdate(prevProps,pervState){
        if(!pervState.edit&&this.state.edit){
          this.editText.current.focus();
        }
    }
    render() {
        let {data,changeDone,editTitle,selectedList} = this.props;
        let {id,title,done,selected} = data;
        let {edit,val} = this.state;
        return <li className={edit?"editing":""}>
        <div className={`todo ${done?'done':''}`}>
            {/* done完成 */}
          <div className="display" ref={this.display}>
                <input className="check" type="checkbox" 
                checked={selected}
                onChange={({target})=>{
                    selectedList(id);
                }}
                />
                <div className="todo-content"
                onDoubleClick={()=>{
                    this.setState({
                      edit:true
                    })
                  }}
                >{title}</div>
                <span className="todo-destroy"
                onClick={()=>{
                    changeDone(id)
                }}
                ></span>
          </div>
          <div className="edit">
              <input className="todo-input" 
              type="text" 
              value={val} 
              ref={this.editText}
              onChange={({target})=>{
                this.setState({
                    val: target.value
                  })
              }}
              onBlur={()=>{
                // 退出编辑时，判断是否为空
                if(val.trim()){
                    // 不为空，则将title同步至父级
                    editTitle(id,val);
                } else {
                    // 为空，则恢复本身的title
                    this.setState({
                      val:title
                    })
                }
                this.setState({
                  edit:false
                })
              }} 
              />
            </div>
        </div>
      </li>
    }
}
export default Li;