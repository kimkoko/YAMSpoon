import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss';
import SearchIcon from '../Icons/SearchIcon';
import MypageIcon from '../Icons/MypageIcon';
import Logo from '../Icons/LogoIcon'

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  // 엔터키를 누르면 검색값 전달
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      navigate(`/search?recipes=${searchValue}`);
    }
  }

  // input 값 변화를 확인하는 핸들러
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <header>
      <div className='headerInner'>
        <Link to ="/"><Logo /></Link>

        <div className='container'>
          <div className='nav'>
            <Link className='text' to = "/material-recipe">재료별 레시피</Link>
            <Link className='text' to = "/type-recipe">종류별 레시피</Link>
            <Link className='text' to = "/regrigerator">나만의 냉장고</Link>
          </div>

          <div className='right-container'>
            <div className='searchContainer'>
              <input 
                className="search-cotainer" 
                id="search" 
                type="text" 
                placeholder="무엇을 찾아드릴까요?"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={(e) => activeEnter(e)}/>
              <Link className="search-icon" to={`/search?recipes=${searchValue}`}><SearchIcon alt ="searchIcon" /></Link>
            </div>
            <Link className='mypage-icon' to="/mypage"><MypageIcon alt="myPageIcon"/></Link>
            <Link to="/signin"><button className='login'>로그인</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;