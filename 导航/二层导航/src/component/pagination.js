//pagination.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../static/data";
function Pagination() {
    const { type = "all", page = 1 } = useParams();
    let newpage = parseInt(page);//当前页数
    let nowData = [];
    if (type === "all") {
        let arr = Object.keys(data);
        arr.forEach(element => {
            nowData = [...nowData, ...data[element]]
        });
    } else {
        nowData = data[type];//该类型的全部数据
    }
    const len = 5;
    const pageLen = Math.ceil(nowData.length / len);//总共有多少页，向上取整
    function setNub() {
        let nubs = [];
        //第一页不显示上一页
        newpage > 1 && nubs.push(<Link to={`/community/${type}/${newpage - 1}`} key="up">上一页</Link>);
        for (let i = 1; i <= pageLen; i++) {
            if (i === newpage) {
                nubs.push(<a key={i} className="active">{i}</a>);
            } else {
                nubs.push(<Link to={`/community/${type}/${i}`} key={i}>{i}</Link>);
            }
        }
        newpage < pageLen && nubs.push(<Link to={`/community/${type}/${newpage + 1}`} key="down">下一页</Link>);
        return nubs;
    }
    return <nav className="pagination">{setNub()}</nav>;
}
export default Pagination;