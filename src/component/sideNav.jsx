import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
class SideNav extends Component {
  render() {

    return (
      <Menu mode="vertical" theme="light">
        <Menu.Item><Link to="/">首页tkd编辑</Link></Menu.Item>
        <Menu.Item><Link to="/wuyou">无忧资讯选项类型</Link></Menu.Item>
        <Menu.Item><Link to="/helpLinks">友情链接</Link></Menu.Item>
        <Menu.Item><Link to="/allArticle">文章列表</Link></Menu.Item>
        <Menu.Item><Link to="/editArticle">已编辑文章列表</Link></Menu.Item>
        <Menu.Item><Link to="/unEditArticle">未编辑文章列表</Link></Menu.Item>
        <Menu.Item><Link to="/publish">发布文章</Link></Menu.Item>
      </Menu>
    )
  }
}


export default SideNav