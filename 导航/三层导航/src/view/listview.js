import React from 'react';
import ListNav from '../component/list_nav'
import List from '../component/list'
import Pagination from '../component/pagination'
export default function ListView() {
  return <div>
    <ListNav/>
    <List/>
    <Pagination/>
  </div>;
}