import React from 'react';
import style from './TabButtons.module.sass';

function TabButtons(){
    return (
      <div className={style.container}>
        <div className={style.button__active}>
          <div>
            <span>Repos</span> <span className={style.count}>73</span>
          </div>
        </div>
        <div className={style.button}>
          <div>
            <span>Starred</span> <span className={style.count}>5</span>
          </div>
        </div>
      </div>
    )
  }

export default TabButtons;