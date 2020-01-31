import React from 'react';
import style from './App.module.sass';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import TabButtons from '../TabButtons/TabButtons';
import TabContent from '../TabContent/TabContent';

function App(){
  return (
    <div className={style.app}>
      <Header></Header>
      <Profile></Profile>
      <TabButtons></TabButtons>
      <TabContent></TabContent>
    </div>
  );
}

export default App;
