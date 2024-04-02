import React from 'react';
import './LoginHeader.scss';

const LoginHeader = () => {
  return (
    <header className="header">
        <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'/>
    </header>
  );
};

export default LoginHeader;