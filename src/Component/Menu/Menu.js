import React from 'react';
import "./menu.css";

const Menu = ({menuText, menuImg, menuTag, customClasses}) => {
  return (
    <div className="menu">
        <div className="homeMenu">
            <div className={`menuText ${customClasses}`}>{menuText}</div>
            <div className="menuImgText">
                <div className="menuImg">
                    <img src={menuImg} alt="" />
                </div>
                <div className="menuTag">{menuTag}</div>
            </div>
        </div>
    </div>
  )
}

export default Menu