import React from 'react';
import style from './App.module.sass';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function App(){
  return (
    <div className={style.app}>
      <Header></Header>
      <Profile></Profile>
    </div>
  );
}

export default App;
