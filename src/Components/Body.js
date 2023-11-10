// Body.js
import React from 'react';
import Timer from './Timer'

function Body({title}) {
  return (
    <div className="mid_nav">
      <div>{title}</div>
      <div className="timer_container">
        <div className="timer_title">현재 주행 시간</div>
        <Timer className="timer" _hours={1} _minutes={30} seconds={12}/>
      </div>
      <div className="mid_dscrpt">안전하고 즐거운 시간 보내세요!</div>
    </div>
  );
}

export default Body;