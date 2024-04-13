import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Recipe.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/TopButton/TopButton';
import Recipe from '../../utils/Recipe';
import User from "../../utils/User";
import Heart from "../../components/Icons/Heart";
import Check from "../../components/Icons/Check";
import Alert from "../../components/Icons/Alert";
import Modal from "../../components/Modal/Modal";
import Save from "../../components/Icons/Save";

export default function RecipeDetails () {
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [saveRecipe, setSaveRecipe] = useState(false); // 저장한 레시피
  const [name, setName] = useState(''); // 레시피 이름
  const [description, setDescription] = useState(''); // 레시피 설명
  const [content, setContent] = useState([]); // 레시피 내용
  const [ingredients, setIngredients] = useState([]); // 레시피 재료
  const [sauce, setSauce] = useState([]); // 레시피 소스
  const [user_like, setUser_like] = useState([]); // 사용자가 좋아요한 레시피
  const [category, setCategory] = useState({}); // 레시피 카테고리
  const [img, setImg] = useState(''); // 레시피 이미지  
  const navigate = useNavigate();

  // 레시피 아이디
  const { recipeId } = useParams()
  const id = "u3"

  // 레시피 정보 가져오기
  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await Recipe.getDetailRecipe(recipeId);
      const recipe = response.data;

      setName(recipe.name);
      setDescription(recipe.description);
      setContent(recipe.content);
      setIngredients(recipe.ingredients);
      setSauce(recipe.sauce);
      setUser_like(recipe.user_like);
      setCategory(recipe.category);
      setImg(recipe.img);

      setIsLoading(false);
    }
    fetchRecipe()
  }, [])

  if (isLoading) return null

  // 저장하기 핸들러
  // api 미구현으로 인한 임시 코드
  const saveHandle = async () => {
    setIsSaveModalOpen(true);

    try {
      const user = await User.getUser(id);
      if (user) setIsMember(false)

      let userData;

      if(saveRecipe) {
        userData = {recipe: user.data.recipe.filter((id) => id !== recipeId)}
        setSaveRecipe(false);
      } else {
        userData = {recipe: [...user.data.recipe, recipeId]}
        setSaveRecipe(true);
      }

      await User.updateUserBookmark(user.data.id, userData)
    } catch (error) {
      console.error("저장 중 오류 발생 : ", error);
    }    
  }

  // 좋아요 핸들러
  // api 미구현으로 인한 임시 코드
  const toggleLike = async () => {
    setIsLikeModalOpen(true); 
    try {
      const user = await User.getUser(id);
      if (user) setIsMember(false)

      let recipeData;

      if(liked) {
        recipeData = {user_like: user_like.filter((id) => id !== user.data.id)}

        setLiked(false);
        setUser_like(user_like.filter((id) => id !== user.data.id))
      } else {
        recipeData = {user_like: [...user_like, user.data.id]}

        setLiked(true);
        setUser_like([...user_like, user.data.id])
      }

      await Recipe.putLikeRecipe(recipeId, recipeData)
    } catch (error) {
      console.error("저장 중 오류 발생 : ", error);
    }    
  }

  return (
      <>
        <Header />
        <div className='recipeInner'>
          <div className='recipeTop'>
            <div className='recipeImgBox'>
              <p className='recipeImg'>
                <img src={img} alt='recipeImg' />
              </p>
              <div className='saveAndLikes'>
                <button type='button' className='saveBtn' onClick={saveHandle}>
                  {saveRecipe ? <Save fill='#aaaaaa' /> : <Save fill='none' />}
                  <span>저장하기</span>
                </button>
                <button type='button' className='likesBtn' onClick={toggleLike}>
                  {!liked ? <Heart fill='none' /> : <Heart fill='#D3233A' />}
                  <span>{user_like.length}</span>
                </button>
              </div>
            </div>
            <div className='recipeInfo'>
              <p className='category'>{category}</p>
              <h3 className='recipeName'>{name}</h3>
              {description.split("\n").map((line, index) => (
                  <p className='recipeText' key={index}>{line}</p>
                ))}
            </div>
          </div> 
          <div className='recipeDetailBox'>
            <div className='marterialAndSauce'>
              <div className='materialBox Boxs'>
                <h4 className='title'>재료 준비</h4>
                <ul className='materialList material'>
                  {ingredients.map((ingredient, index) => {
                      return (
                        <li className='material' key={index}>
                          <span className='materialName'><Check /> {ingredient.key}</span>
                          <span className='materialQuantity'>{ingredient.value}</span>
                        </li>
                      )})}
                </ul>
              </div>
              <div className='sauceBox Boxs'>
                <h4 className='title'>소스 준비</h4>
                <ul className='materialList sauce'>
                  {sauce.map((sauce, index) => {
                      return (
                        <li className='material' key={index}>
                          <span className='materialName'><Check /> {sauce.key}</span>
                          <span className='materialQuantity'>{sauce.value}</span>
                        </li>
                      )})}
                </ul>
              </div>
            </div>
            <div className='recipeTextBox'>
              <h4 className='title'>레시피</h4>
              <p>
                {content.map((content, index) => {return (<span key={index}>{content}<br/></span>)})}
              </p>
            </div>
          </div>
        </div>
        {isSaveModalOpen && 
          (<Modal 
            IconComponent={isMember ? (() => <Save fill="none"/>) : (() => <Alert/>)}
            alertBody={isMember ? (saveRecipe ? "레시피가 저장되었습니다.\n마이 페이지에서 저장된 레시피를 확인해 주세요!" : "레시피 저장이 취소되었습니다.") : "로그인 후 이용해 주세요."}
            buttonAction={isMember ? (() => setIsSaveModalOpen(false)) : (() => navigate('/signin'))} 
            actionText='확인'
            hideCloseButton={true}
          />)}
        {isLikeModalOpen && 
          (<Modal 
            IconComponent={isMember ? (() => <Heart fill="none"/>) : (() => <Alert/>)}
            alertBody={isMember ? (liked ? "레시피를 좋아해 주셔서 감사합니다." : "레시피 좋아요가 취소되었습니다.") : "로그인 후 이용해 주세요."}
            buttonAction={isMember ? (() => setIsSaveModalOpen(false)) : (() => navigate('/signin'))} 
            actionText='확인'
            hideCloseButton={true}
          />)}
        <TopButton />
        <Footer />
    </>
  )
}