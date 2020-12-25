import React,{Component} from "react";
import "./index.css"
import List from "./list"
import data from './data'
class App extends Component{
    render(){
        return <div className="friend-list">
            {Object.keys(data).map((item,index) => {
                return <List key={index} data={data[item]}/>
            })}
            {/* Object.key(data)可以将data对象里面的属性名添加到一个数组 */}
    </div>
    }
}
export default App