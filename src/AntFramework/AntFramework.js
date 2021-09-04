import React from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Popular from "./Popular";
import UpcomingMovies from './UpcomingMovies';
import NowPlaying from './NowPlaying';

const { TabPane } = Tabs;

function AntFramework() {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Popular" key="1">
          <Popular/>
        </TabPane>
        <TabPane tab="Upcoming" key="2">
          <UpcomingMovies/>
        </TabPane>
        <TabPane tab="Now Playing" key="3">
          <NowPlaying/>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AntFramework
