import React from 'react';
import style from './TabContent.module.sass';

function TabContent(){
    return (
      <div className={style.container}>
        <div className={style.search}>
          <input placeholder="Filter by name"></input>
        </div>
        <div className={style.item}>
          <h1>todo-backend</h1>
          <p>Simply to-do server based on NodeJs with Express and MongoDB</p>
          <div>
            <span>JavaScript</span>
            <span>177</span>
          </div>
        </div>
      </div>
    )
  }

export default TabContent;