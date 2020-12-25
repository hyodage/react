import React, { PureComponent ,createRef} from "react";
class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: props.data.title
    }
    //组件初始化时，在 state 中，复制了title
  }
  editText=createRef();
  componentDidUpdate(prevProps,pervState){
    if(!pervState.edit&&this.state.edit){
      this.editText.current.focus();
    }
  }
  render() {
    let { data, remove, cgselected,editLy } = this.props;
    let { edit, title } = this.state;
    // class为editing编辑状态
    return <li className={edit ? "editing" : ''}>
      <h3>{data.name}</h3>
      <input type="checkbox"
        checked={data.selected}
        onChange={({ target }) => {
          cgselected(data.id)
        }}
      />
      <p onDoubleClick={() => {
        this.setState({
          edit: true
        })
      }}>{data.title}</p>
      <textarea
        ref={this.editText}
        onBlur={() => {
          if (title.trim()) {
            editLy(data.id,title);
          } else {
            this.setState({
              title:data.title
            })
          }
          this.setState({
            edit: false
          })
        }}
        value={title}
        onChange={({ target }) => {
          this.setState({
            title: target.value
          })
        }}></textarea>
      <a onClick={() => {
        remove(data.id)
      }}>删除</a>
    </li>
  }
}
export default List