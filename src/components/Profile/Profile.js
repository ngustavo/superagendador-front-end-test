import React from 'react';
import style from './Profile.module.sass';

function Profile(){
    return (
      <div className={style.profile}>
        <section>
          <img />
          <div>
            <h1>Roger Ramos</h1>
            <p>Front End Dev and UI Designer</p>
          </div>
        </section>
      </div>
    )
  }

export default Profile;