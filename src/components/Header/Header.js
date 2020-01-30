import React from 'react';
import style from './Header.module.sass';
import logo from '../../assets/github-light.png';

function Header(){
  return (
      <div className={style.header}>
        <img src={logo} />
        <h1>Github</h1>
        <p>profiles</p>
      </div>
  )
}

export default Header;