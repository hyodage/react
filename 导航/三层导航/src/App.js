//App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './component/nav';
import './static/index.css'
import {route_list} from './static/route_list'
function App(){
return <div className="wrap">
  <Nav />
  <Switch>
    {route_list.map((item,index)=>{
      return <Route
        key={index}
        exact={item.exact}
        path={item.path}
        render={(props)=>{
          return item.render(props);
        }}
      />
    })}
  </Switch>
</div>
}
export default App; 
