import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return <nav className="nav">
    <NavLink exact to="/community">全部</NavLink>
    <NavLink to="/community/good">精华</NavLink>
    <NavLink to="/community/share">分享</NavLink>
    <NavLink to="/community/ask">问答</NavLink>
  </nav>
}
