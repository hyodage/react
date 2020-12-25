import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";//./store的index.js作为'仓库'
/*
  使用 Provider 组件包裹 整个应用
  在 Provider 中有一个 store 属性，store 属性中传入的是 redux 的 store
  路由BrowserRouter可以被Provider包裹也可以包裹Provider
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
