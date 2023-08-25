import React from 'react';
import  './Header.css';
import { NavLink } from 'react-router-dom';

const Header=(props) => {

    return (
      <div className="header borderRadius textFamily">
        <article>Мяу</article>
        <div className="auth">
          {props.isAuth ? (
            <span className="auth"><button onClick={props.logout}> Sign Out</button></span>
          ) : (
            <button><NavLink to={"/login"}> Sign Up</NavLink></button>
          )}
        </div>
      </div>
    );
}

export default Header;