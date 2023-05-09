import React  from 'react'
import "./Home.css"

import Profile from '../../components/Profile/Profile';
import Feed from '../../components/Feed/Feed';
import Trending from '../../components/Trending/Trending';
import Sidebar from '../../components/Sidebar/Sidebar';
const Home = () => {
  return (
    <>
    <Profile />
    <div className="body">
      <div className="feed">
        <Sidebar />
      </div>
     
      <div className="feed">
        <Feed />
      </div>
      <div className="feed">
        <Trending />
      </div>
    </div>
    </>
  )
}

export default Home
