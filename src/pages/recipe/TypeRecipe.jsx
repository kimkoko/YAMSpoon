import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import TopButton from '../../components/TopButton/TopButton'
import Heart from '../../components/Icons/Heart'
import RecipeCategory from '../../utils/RecipeCategory'
import Recipe from '../../utils/Recipe'
import './TypeRecipe.scss'

const TypeRecipe = () => {
  const navigate = useNavigate();

  const [foodType, setFoodType] = useState([]);
  const [selected, setSelected] = useState(null);
  const [recipes , setRecipes] = useState([]);
  const itemsPerPage = 16;
  const [startIndex, setStartIndex] = useState(0);

  const [sortingFilter, setSortingFilter] = useState('latest');
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 카테고리 데이터 가져오기
      const response = await RecipeCategory.getRecipeCategory();
      setFoodType(response.data.map(category => category));

      // 레시피 데이터 가져오기
      const recipeResponse = await Recipe.getRecipe();
      setRecipes(recipeResponse.data);
    }
    
    fetchData()
  }, [])

  useEffect(() => {
    // 정렬된 레시피 배열
    const sorted = [...recipes].sort((a, b) => {
      if (sortingFilter === 'latest'){
        return new Date(b.createdAt) - new Date(a.createdAt);
      }else if (sortingFilter === 'famous') {
        return b.user_like.length - a.user_like.length;
      }

      return new Date(b.createdAt) - new Date(a.createdAt);
    })

    setSortedRecipes(sorted);
  }, [sortingFilter, recipes]);

  // 카테고리 선택 핸들러
  const handleSelect = async (index, categoryId) => {
    if (selected === index) {
      setSelected(null);
    }else{
      setSelected(index);
      const response = await Recipe.getCatgory(categoryId);
      setRecipes(response.data);
    }
  };

  // 전체 버튼 클릭 핸들러
  const handleAllButton = async() => {
    const response = await Recipe.getRecipe();
    setRecipes(response.data);
    setSelected(null);
  }

  // 페이지 바뀔때마다 보여줄 레시피 핸들러
  const handlePageChange = (pageIndex) => {
    setStartIndex(pageIndex * itemsPerPage);
  }

  // 레시피 클릭시 레시피 상세 페이지로 이동
  const handleClickRecipe = (recipeId) => {
    navigate(`recipe/${recipeId}`);
  }

  // 정렬 기준 변경 이벤트 핸들러
  const handleSortingChange = (e) => {
    setSortingFilter(e.target.value);
  }

  // 배열을 원하는 크기로 나누는 함수 [ a x b 배열 ]
  const makeArray = (arr, size) => {
    const result = [];
    for(let i = 0; i < arr.length; i += size){
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

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
            <button className='all' onClick={() => handleAllButton()}>전체</button>
            <div className='food-type-button-container'>
              {foodType.map((category, index) => (
                <button
                  key={index}
                  className={`food-type-button ${selected === index ? 'click-food-type-button' : ''}`}
                  onClick={() => handleSelect(index, category.id)}
                >
                  {category.category}
                </button>
                ))}
            </div>
          </div>
          <div className='line'/>
        </div>
        <div className='search-result-container'>
          <div className='result-container'>
            <p className='result-count'>검색 결과 <span className="count">{recipes.length}</span>건 조회</p>
            <select name="filter" value={sortingFilter} onChange={handleSortingChange}>
              <option value="latest">최신순</option>
              {/* <option value="useful">유용한순</option> */}
              <option value="famous">인기순</option>
            </select>
          </div>
          <div className='all-image-container'>
            {makeArray(sortedRecipes.slice(startIndex, startIndex + itemsPerPage), 4).map((row, rowIndex) => (
              <div key={rowIndex} className='images-container'>
                {row.map((recipes, columnIndex) => (
                  <div key={rowIndex * 4 + columnIndex} className='image-container' onClick={() => handleClickRecipe(recipes.id)}>
                    <div className='imgBox'>
                      <img className='recipe-image' src={recipes.img} alt={recipes.name} />
                    </div>
                    <p className='recipe-name'>{recipes.name}</p>
                    <div className='like-container'>
                      <Heart fill={"#D3233A"} />
                      <p className='like-count'>{recipes.user_like.length}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Pagination items={recipes} onPageChange={handlePageChange}/>
        <TopButton />
        <Footer />
      </div>
    </div>
  )
}

export default TypeRecipe;