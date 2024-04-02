import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
        <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'/>
        <div className='nav'>
            <Link className='text' to = "/material">재료별 레시피</Link>
            <Link className='text' to = "/type-recipe">종류별 레시피</Link>
            <Link className='text' to = "/regrigerator">나만의 냉장고</Link>
        </div>
        <div className='searchContainer'>
            <input className="search-cotainer" type="text" placeholder="무엇을 찾아드릴까요?"/>
            <img className='search' src={process.env.PUBLIC_URL + '/images/search.svg'} alt='search' />
        </div>
        <img className='myPage' src={process.env.PUBLIC_URL + '/images/myPage.svg'} alt='mypage' />
        <button className='login'>로그인</button>
    </header>
  );
};

export default Header;