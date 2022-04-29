import React from 'react';
import "./songplaying.css";

const SongPlaying = ({ songNumber, songImage, songTitle, songPlaying, songTime, songAlbum }) => {
    return (
        <div className="songPlaying">
            <div className="songPlayingItem">
                <div className="songNumber">{songNumber}</div>
                <img src={songImage} alt="" /><span><div className="songTitle">{songTitle}</div></span>
                <div className="songPlaying">{songPlaying}</div>
                <div className="songTime">{songTime}</div>
                <div className="songAlbum">{songAlbum}</div>
            </div>
        </div>
    )
}

export default SongPlaying



