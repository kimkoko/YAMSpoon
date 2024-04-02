import React from 'react';
import './Footer.scss';

const Header = () => {
  return (
    <footer className="footer">
        <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'/>
        <p>Copyright ©️ eliceTeam6.All rights reserved.</p>
    </footer>
  );
};

export default Header;