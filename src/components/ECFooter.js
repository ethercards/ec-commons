import React from 'react';
import './ECFooter.css';
import logo from './logo-in-menu.png';

const ECFooter = () => {

  return (
    <div id="footer">
      <div className="footer-container container">
        <div id="copyright" className="d-flex">
          <p><span style={{ fontSize: '18px' }}>©</span> 2021 All Rights Reserved</p>
          <img src={logo} style={{ height: '35px', opacity:'0.6' }}></img>
        </div>
      </div>
    </div>

  );
}
export default ECFooter;