import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './entry.scss';
import { Tabs } from 'antd';
import HomeIndex from './pages/home/index.jsx';
import NewsIndex from './pages/news/index.jsx';
import VideosIndex from './pages/videos/index.jsx';
const TabPane = Tabs.TabPane;

class Entry extends Component {
  state = {
    title: '标题',
    footer_tabs: [
      {
        key: 'home',
        value: '首页',
        label: '首页',
        index: 0,
        component: HomeIndex
      },{
        key: 'news',
        value: '最新',
        label: '最新',
        index: 1,
        component: NewsIndex
      },{
        key: 'videos',
        value: '视频',
        label: '视频',
        index: 2,
        component: VideosIndex
      },{
        key: 'me',
        value: '我的',
        label: '我的',
        index: 3
      }
    ],
  }
  
  callback = (index) => {
    this.setState({
      title: this.state.footer_tabs[index].label
    })
  }

  render() {
    return <div className="app-entry">
      <div className="app-head">{this.state.title}</div>
      <div className="app-footer">
        <Tabs className="footer-tap" tabPosition="bottom" defaultActiveKey="0" onChange={this.callback}>
          {
            this.state.footer_tabs.map((item, index) => {
              // return <Router tab={item.label} key={index}>
              //   <div>
              //     <TabPane tab={item.label} key={item.index}>
              //       <Link to={'/' + item.key}>Home</Link>
              //     </TabPane>
              //     <Route exact path={'/' + item.key} component={item.component} />
              //   </div>
              // </Router>
              return <TabPane tab={item.label} key={item.index}></TabPane>
            })
          }
        </Tabs>
      </div>
    </div>;
  }
}

export default Entry;
