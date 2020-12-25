import React from 'react';
import Nav from '../component/nav'
import List from '../component/list'
import Pagination from '../component/pagination'
export default function Community() {
  return <div className="wrap">
  <Nav/>
  <List/>
  <Pagination/>
</div>;
}