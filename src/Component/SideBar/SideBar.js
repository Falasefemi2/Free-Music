import React from 'react';
import "./sidebar.css";
import Music from "../assets/Vector.png"
import Menu from '../Menu/Menu';
import Home from '../assets/Vector (1).png';
import Trend from "../assets/Vector (2).png";
import Library from "../assets/Vector (3).png";
import Discover from "../assets/Vector (4).png";
import Playlist from "../assets/Vector (5).png";
import Podcast from "../assets/Vector (6).png";
import Daily from "../assets/Vector (7).png";
import Love from "../assets/Vector (8).png";
import Artist from "../assets/Vector (9).png";
import Local from "../assets/Vector (10).png";
import setting from "../assets/Vector (11).png";
import logout from "../assets/Vector (12).png";

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__title">
            <img src={Music} alt="" className='sidebar__title-img' />
            <div className="sidebar__title-text">Fresh<span>Music</span></div>
        </div>
        <div className="menu__cat">
        <Menu menuText="Menu" menuImg={Home} menuTag="Home" />
        <Menu menuImg={Trend} menuTag="Trend" />
        <Menu menuImg={Library} menuTag="Library" />
        <Menu menuImg={Discover} menuTag="Discover" />
        </div>

        <div className="menu__cat">
        <Menu menuText="Discover" menuImg={Playlist} menuTag="Playlist" />
        <Menu menuImg={Podcast} menuTag="Podcast" />
        <Menu menuImg={Daily} menuTag="Daily Mix" />
        </div>

        <div className="menu__cat">
        <Menu menuText="Your Collection" menuImg={Love} menuTag="Liked Songs" />
        <Menu menuImg={Artist} menuTag="Favourite Artist" />
        <Menu menuImg={Local} menuTag="Local" />
        </div>

        <div className="menu__cat">
        <Menu menuText="General" menuImg={setting} menuTag="Setting" />
        <Menu menuImg={logout} menuTag="Log Out" />
        </div>

    </div>
  )
}

export default SideBar