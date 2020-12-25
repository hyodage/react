import React from "react";
import './static/index.css'
import Add from "./Add"
import Message from "./Message"
import Sum from "./Sum"
function App(){
    return <section className="wrap">
    <h2 className="title">留言板</h2>
    <Add/>
    <Message/>
    <Sum/>
</section>
}
export default App;