//component/nav.js
import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return <nav className="nav">
    <NavLink to="/" exact>首页</NavLink>
    <NavLink to="/about">关于</NavLink>
    <NavLink to="/join">加入</NavLink>
  </nav>
}