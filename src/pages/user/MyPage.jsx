import React, {useEffect, useState} from 'react';
import './Mypage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/TopButton/TopButton';
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import User from '../../utils/User';
import { Link } from 'react-router-dom';

export default function MyPage() {
	const [user, setUser] = useState([]); // 유저 정보
	const [isLoading, setIsLoading] = useState(true);
	const [saveList, setSaveList] = useState(false); // 저장한 레시피 리스트

	// 사용자 ID 임시로 지정
	const id = "u3"

	// 유저 정보 조회
	useEffect(() => {
    const fetchUser = async () => {
      const response = await User.getUser(id);
      const user = response.data;
      setUser(response.data);
      setIsLoading(false);
      setSaveList(user.recipe.length > 0 ? true : false);
    }

    fetchUser()
	}, [])

	if (isLoading) return null

	return (
			<>
        <Header />
        <div className='inner'>
          <div className='titleBox'>
            <h2 className='pageTitle'>마이 페이지</h2>
          </div>
          
          <div className='userBox'>
            <p>
              <span className='name'>{user.name}</span> 님 안녕하세요!
            </p>

            <Link to='/edit-profile'>
              <button type='button' className='edit notFilled'>정보 수정</button>
            </Link>
          </div>
        </div>
        
        <div className='listInner'>
          <div className='saveListBox'>
              <h2 className='title'>내가 저장한 레시피</h2>
              <div className='saveList'>
                {saveList ?
                  (<ImageCarousel slideDatas={user.recipe} hideRecipeRanking={true}/>)
                  :
                  (<div className='empty'>
                    <p>저장된 레시피가 없습니다.</p>
                  </div>)
                }
              </div>
          </div>
        </div>
        <TopButton />
        <Footer />
    </>
	)
}