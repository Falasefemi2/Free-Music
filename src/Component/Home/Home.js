import React from 'react';
import "./home.css";
import search from "../assets/Vector (13).png";
import gradient from "../assets/Background.png";
import verifiedImg from "../assets/Verified.png";
import olamide from "../assets/image 1.png";
import SongPlaying from '../SongPlaying/SongPlaying';
import mike from "../assets/1.png";
import mike2 from "../assets/3.png";
import mike3 from "../assets/5.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__links">
          <ul className="listItem">
            <li className="listItemli">Music</li>
            <li className="listItemli">Podcast</li>
            <li className="listItemli">Live</li>
            <li className="listItemli">Radio</li>
          </ul>
          <div className="home__search-bar">
            <img src={search} alt="" />
            <input type="text" placeholder='Search music' />
          </div>
        </div>
        <div className="image__container">
          <div className="image__gradient">
            <img src={gradient} alt="" />
            <div className="verified">
              <img src={verifiedImg} alt="" />
              <p>Verified Artist</p>
            </div>
            <div className="bold__text">Olamide Baddoo</div>
            <div className="mini-text">27.852.501 monthly listeners</div>
            <div className="olamide__image">
              <img src={olamide} alt="" />
            </div>
          </div>
        </div>

        <div className="song__playing">
          <div className="popular">Popular</div>
          <div className="all">See All</div>
        </div>

        {/* <div className="song__contain">
          <div className="number">#</div>
          <div className="title">Title</div>
          <div className="play">Playing</div>
          <div className="time">Time</div>
          <div className="album">Album</div>
        </div> */}
        
        {/* <SongPlaying songNumber="1" songImage={mike} songTitle="Bille Jane" songPlaying="123.2.344445" songTime="3.48" songAlbum="Thriller 25 Sup..."  /> */}


        <table>
    <thead>
        <tr className='song__contain'>
            <th className='number'>#</th>
            <th className='title'>Title</th>
            <th className='play'>Playing</th>
            <th className='time'>Time</th>
            <th className='album'>Album</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>




      </div>
    </div>
  )
}

export default Home