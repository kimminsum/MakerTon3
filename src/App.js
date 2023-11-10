// App.js
import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Bottom from './Components/Bottom'
// import CheckList from './Components/CheckList';
import './App.css';

function App() {
  return (
    <div className="background">
      <Header />
      <Body title="주행중..." />
      <Bottom />
    </div>
  );
}

export default App;