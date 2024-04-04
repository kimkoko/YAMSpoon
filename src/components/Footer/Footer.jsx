import React from 'react';
import './Footer.scss';
import Logo from '../Icons/LoginIcon';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='container'>
          <Logo className="logo" alt ="logo" />
          <p>Copyright ©️ eliceTeam6.All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;