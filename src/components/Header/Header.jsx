import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss';
import SearchIcon from '../Icons/SearchIcon';
import MypageIcon from '../Icons/MypageIcon';
import Logo from '../Icons/LogoIcon'

const Header = () => {
  const navigate = useNavigate();

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      navigate('/search');
    }
  }

  return (
    <header className='header'>
      <Link to ="/"><Logo /></Link>

      <div className='container'>
        <div className='nav'>
          <Link className='text' to = "/material">재료별 레시피</Link>
          <Link className='text' to = "/type-recipe">종류별 레시피</Link>
          <Link className='text' to = "/regrigerator">나만의 냉장고</Link>
        </div>

        <div className='right-container'>
          <div className='searchContainer'>
            <input className="search-cotainer" id='search' type="text" placeholder="무엇을 찾아드릴까요?"
              onKeyDown={(e) => activeEnter(e)}/>
            <Link className="search-icon" to="/search"><SearchIcon alt ="searchIcon" /></Link>
          </div>
          <Link className='mypage-icon' to="/mypage"><MypageIcon alt="myPageIcon"/></Link>
          <button className='login'>로그인</button>
        </div>
      </div>
    </header>
  );
};

export default Header;