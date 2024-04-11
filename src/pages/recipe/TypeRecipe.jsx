import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import TopButton from '../../components/TopButton/TopButton'
import Heart from '../../components/Icons/Heart'
import RecipeCategory from '../../utils/RecipeCategory'
import Recipe from '../../utils/Recipe'
import './TypeRecipe.scss'

const TypeRecipe = () => {
  const [foodType, setFoodType] = useState([]);
  const [selected, setSelected] = useState(null);
  const [recipes , setRecipes] = useState([]);
  const itemsPerPage = 16;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await RecipeCategory.getRecipeCategory();
      setFoodType(response.data.map(category => category));
      const recipeResponse = await Recipe.getRecipe();
      setRecipes(recipeResponse.data);
    }
    
    fetchData()
  }, [])

  const handleSelect = async (index, categoryId) => {
    if (selected === index) {
      setSelected(null);
    }else{
      setSelected(index);
      const response = await Recipe.getCatgory(categoryId);
      setRecipes(response.data);
    }
  };

  const handleAllButton = async() => {
    const response = await Recipe.getRecipe();
    setRecipes(response.data);
    setSelected(null);
  }

  const handlePageChange = (pageIndex) => {
    setStartIndex(pageIndex * itemsPerPage);
  }

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
            <select name="filter">
              <option value="latest">최신순</option>
              <option value="useful">유용한순</option>
              <option value="famous">인기순</option>
            </select>
          </div>
          <div className='all-image-container'>
            {makeArray(recipes.slice(startIndex, startIndex + itemsPerPage), 4).map((row, rowIndex) => (
              <div key={rowIndex} className='images-container'>
                {row.map((recipes, columnIndex) => (
                  <div key={rowIndex * 4 + columnIndex} className='image-container'>
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