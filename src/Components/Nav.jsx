import React, { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = ()=> {
    setIsMenuOpen(true);
  };

  const menuCloseHandler = ()=> {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-box">
          <div className='logo-wrapper'>
            <a href="/"><img className={`logo ${isMenuOpen ? 'hidden' : ''}`} src="/img/logo.png" alt="logoImage" /></a>
          </div>
          <div className="nav-list-wrapper">
            <div onClick={menuOpenHandler} className={`nav-btn ${isMenuOpen ? 'hidden' : ''}`}><FontAwesomeIcon icon={faBars} /></div>
            <ul className='nav-list'>
              <li className="nav-item"><a href="">About</a></li>
              <li className="nav-item"><a href="">Resume</a></li>
              <li className="nav-item"><a href="">Project</a></li>
              <li className="nav-item"><a href="mailto:sbk930123@naver.com">Contact</a></li>
            </ul>
          </div>
          <ul className={`nav-list-tab ${isMenuOpen ? 'show' : ''}`}>
            <li className="nav-item"><a href="">About</a></li>
            <li className="nav-item"><a href="">Resume</a></li>
            <li className="nav-item"><a href="">Project</a></li>
            <li className="nav-item"><a href="mailto:sbk930123@naver.com">Contact</a></li>
            <li className="nav-item"><a onClick={menuCloseHandler}>X</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav;