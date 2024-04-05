import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import TopButton from '../../components/TopButton/TopButton'
import LikeIcon from '../../components/Icons/LikeIcon'
import './TypeRecipe.scss'

const TypeRecipe = () => {
  
  const foodType = ["양식", "중식", "일식", "한식"];
  const [selected, setSelected] = useState(Array(foodType.length).fill(false));

  const handleSelect = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };


  
  const searchResultCount = 35;
  const likeCount = 58678;
  


  return (
    <div>
      <Header />
      <div className='type-recipe-container'>
        <div className='type-recipe-result'>
          <p className='type-recipe-text'>종류별로 레시피가 준비되었어요!</p>
        </div>
        <div className='food-type'>
          <div className='line'/>
          <div className='food-type-filter'>
            <button className='all'>전체</button>
            <div className='food-type-button-container'>
              {foodType.map((type, index) => (
                <button
                  key={index}
                  className={`food-type-button ${selected[index] ? 'click-food-type-button' : ''}`}
                  onClick={() => handleSelect(index)}
                >
                  {type}
                </button>
                ))}
            </div>
          </div>
          <div className='line'/>
        </div>
        <div className='search-result-container'>
          <div className='result-container'>
            <p className='result-count'>검색 결과 <span className="count">{searchResultCount}</span>건 조회</p>
            <select name="filter">
              <option value="latest">최신순</option>
              <option value="useful">유용한순</option>
              <option value="famous">인기순</option>
            </select>
          </div>
          <div className='all-image-container'>
            <div className='images-container'>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
            </div>
            <div className='images-container'>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
            </div>
            <div className='images-container'>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
              <div className='image-container'>
                <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                <p className='recipe-name'>레시피 1</p>
                <div className='like-container'>
                    <LikeIcon className='like-icon' fill= '#D3233A' />
                    <p className='like-count'>{likeCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
      <TopButton />
      <Footer />
    </div>
  )
}

export default TypeRecipe;