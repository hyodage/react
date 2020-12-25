import React from 'react';
import { Route, Switch } from 'react-router-dom';
import View404 from './view/404view';
import IndexView from './view/indexview';
import Community from './view/community'
import './static/index.css'
function App(){
return <div>
  <Switch>
    <Route
      path="/"
      exact
      render={()=>{
        return <IndexView/>
      }}
    />
    <Route
      path={["/community","/community/:type","/community/:type/:page"]}
      exact
      render={()=>{
        return <Community/>
      }}
    />
    <Route
      component={View404}
    />

  </Switch>
  
</div>
}
export default App;
