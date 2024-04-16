import React, {useEffect, useState} from 'react';
import './Mypage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/TopButton/TopButton';
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import User from '../../utils/User';
import Recipe from '../../utils/Recipe';
import { Link, useNavigate } from 'react-router-dom';

export default function MyPage() {
	const [user, setUser] = useState([]); // 유저 정보
	const [isLoading, setIsLoading] = useState(true);
	const [saveList, setSaveList] = useState(false); // 저장한 레시피 리스트
  const [recipeData, setRecipeData] = useState([]); // 저장한 레시피 데이터
  const navigate = useNavigate(); // navigate 함수를 사용하기 위해 호출

	// 유저 정보 조회
	useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await User.getUser();
        const user = response.data.data;
        setUser(user);
        setSaveList(user.recipe.length > 0 ? true : false);
        fetchSaveRecipe(user.recipe);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        // 로그인 페이지로 리다이렉트
        navigate('/signin');
      }
    }

    // 유저 저장 레시피 매핑
    const fetchSaveRecipe = async (recipeIds) => {
      const recipes = await Promise.all(recipeIds.map(async (recipeId) => {
        const response = await Recipe.getDetailRecipe(recipeId);
        return response.data.data;
      }));

      setRecipeData(recipes);
      setIsLoading(false);
    }

    fetchUser();
  }, [navigate])
	if (isLoading) return null;
  
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
                  (<ImageCarousel slideDatas={recipeData} hideRecipeRanking={true}/>)
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