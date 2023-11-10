// Header.js
import React from 'react';
import Levels from '../image/Levels.svg';
import Time from '../image/Time.svg';

function Header() {
  return (
    <div className="top_nav">
      <div className="status_bar_top">
        <div className="time">
          <img src={Time} alt="Time" />
        </div>
        <div className="levels">
          <img src={Levels} alt="Logo" />
        </div>
      </div>
      
    </div>
  );
}

export default Header;