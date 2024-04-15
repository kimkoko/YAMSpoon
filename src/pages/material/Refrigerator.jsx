import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import _ from "lodash"
import { Link } from 'react-router-dom'
import './Refrigerator.scss'
import Pagination from '../../components/Pagination/Pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heart from '../../components/Icons/Heart'
import TopButon from '../../components/TopButton/TopButton'
import Carousel from '../../components/Carousel/Carousel';
import AddModal from './AddModal'
import Recipe from '../../utils/Recipe'
//import Ingredients from '../../utils/Ingredients';
import User from '../../utils/User'

const Refrigerator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ materials, setMaterials ] = useState(['감자1']);
  //const recipes = 7;
  const [ recipeData, setRecipeData ] = useState(null)
  const [ filteredRecipe, setFilteredRecipe ] = useState(null)
  const [ totalItems, setTotalItems ] = useState(null)
  const [ pageData, setPageData ] = useState(null)
  const [ pageIndex, setPageIndex ] = useState(null)
  const [ sort , setSort ] = useState('latest')
  //const [ selectedMat, setSelectedMat ] = useState(null)
  //const [ ingredientsData, setIngredientsData ] = useState(null)

  const fetchRecipes = async () => {
    try {
      const response = await Recipe.getRecipe()
      //const ingredients = await Ingredients.getIngredients()
      const user = await User.getUser("u1")
      const recipeDataDeepCopy = _.cloneDeep(response.data)
      const newestData = recipeDataDeepCopy.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      setRecipeData(newestData)

      setFilteredRecipe(newestData)
      setTotalItems(newestData.length)
      //setIngredientsData(ingredients.data)
    //   const userIn = user.data.ingredients.map(item => {
    //     const ingredient = ingredients.data.find(ingredient => ingredient.id === item);
    //     return ingredient ? ingredient.name : null;
    //   })
      setMaterials(user.data.ingredients)

    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
      fetchRecipes();
  }, [])

  useEffect(() => {
    if (!filteredRecipe) return;
  
    let sortedData = [...filteredRecipe];
    if (sort === 'latest') sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    else if (sort === 'likes') sortedData.sort((a, b) => b.user_like.length - a.user_like.length);
  
    setFilteredRecipe(sortedData);
  }, [sort]);

  useEffect(() => {
    if (!filteredRecipe || !pageIndex) return;
  
    const startIndex = pageIndex[0] || 0;
    const endIndex = pageIndex[1] || 16;
    setPageData(filteredRecipe.slice(startIndex, endIndex));
  }, [pageIndex, filteredRecipe]);

  useEffect(() => {
    if (filteredRecipe) {
      setTotalItems(filteredRecipe.length);
    }
  }, [filteredRecipe]);

  const handleAddClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
  }

  const handleDeleteMaterial = (index) => {
        const updatedMaterials = [...materials];
        updatedMaterials.splice(index, 1); 
        setMaterials(updatedMaterials);
  }

  const handleSortChange = (e) => {
        setSort(e.target.value)
  }
  const handlePageData = (data) => {
        setPageIndex([data[0], data[1]])
  }
  const handleAddAction = (dataArray) => {
    // const newItems = dataArray
    //                 .filter(item => !materials.includes(item))
    //                 .map(item => { // 각 요소를 filtered.name으로 변경
    //                     const filtered = ingredientsData.find(ingredient => ingredient.id === item);
    //                     return filtered ? filtered.name : null; // 요소를 filtered.name으로 대체하고, 없으면 null 반환
    //                 })
    const newItems = dataArray.filter(item => !materials.includes(item))

    const newArr = [...materials, ...newItems]

    setMaterials(newArr)
  };

  const handleSelectMat = (dataArr) => {
    const newArr = []
    dataArr.map((isTrue,idx) => {
        if(isTrue) {
            const newFiltered = recipeData.filter(recipe => 
                recipe.ingredients.some(ingredient => ingredient.key === materials[idx]))
            newFiltered.map(item => newArr.includes(item) ? null : newArr.push(item))
        }
    })
    setFilteredRecipe(newArr)
  }

  return (
    <div>
        <Header />
        <div className='material-container'>
            <div className='title'>냉장고 속 재료로 레시피가 준비되었어요!</div>
            <MaterialBar 
                handleAddClick={handleAddClick} 
                materials={materials} 
                handleDeleteMaterial={handleDeleteMaterial} 
                recipes={7} 
                handleSelectMat={handleSelectMat}
            />
            <div className='result'>
                <p>검색 결과 <span>{filteredRecipe? filteredRecipe.length : 0}</span>건 조회</p>
                <select name="order" onChange={handleSortChange}>
                    <option value="latest">최신순</option>
                    <option value="likes">인기순</option>
                </select>
            </div>
            { materials && materials.length === 0 ? <EmptyList /> 
            : !filteredRecipe || filteredRecipe.length === 0 ? <EmptyList recipe/>
            : <RecipesList pageData={pageData}/>
            }
        </div>
        { isModalOpen && <AddModal closeModal={() => setIsModalOpen(false)} handleAddAction={handleAddAction}/> }
        { filteredRecipe && <Pagination
                            key={filteredRecipe.length + sort} 
                            totalItems={totalItems}
                            itemsPerPage={16} 
                            handlePageData={handlePageData}
                        /> }
        <TopButon/>
        <Footer />
    </div>
  )
}

const MaterialBar = ({ handleAddClick, materials, handleDeleteMaterial, recipes, handleSelectMat }) => {

    return (
        <div className='bar-container'>
            <div className='main-bar'>
                <Carousel 
                    CategoryData={materials} 
                    items={recipes} 
                    showDeleteButton={true} 
                    deleteMaterial = {handleDeleteMaterial}
                    fridge
                    handleSelectMat={handleSelectMat} />
            </div>
            <button className='Add' onClick={handleAddClick}>재료 추가</button>
        </div>
    )
}

const RecipesList = ({ pageData }) => {
    if (!pageData) return 
  
      const makeArray = (array, size) => {
        const newArr = [];
        for (let i = 0; i < array.length; i += size) {
            newArr.push(array.slice(i, i + size));
        }
        return newArr;
      };
  
      
      return (
          <div className='ListWrapper'>
              <div className='RecipeList'>
                  { makeArray(pageData, 4).map((chunk, pageIndex) => (
                    <div key={pageIndex} className='Recipe-container'>
                        {chunk.map((item, idx) => (
                            <div className='RecipeItem' key={idx}>
                                <Link to={`/recipes/${item.id}`}>
                                    <div className="item-img">
                                        <img className='ItemImage' src={item.img} alt='image_1' />
                                    </div>
                                    <p>{item.name}</p>
                                    <span>
                                        <Heart fill={"#D3233A"} />
                                        {item.user_like.length}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
              </div>
          </div>
      )
  }


const EmptyList = ({recipe}) => {
    return (
      <div className='ListWrapper'>
        <div className='EmptyList'>
        {   recipe ? '검색된 레시피가 없습니다.'
        : `준비된 재료가 없습니다.
         재료 추가 버튼을 이용해 나만의 냉장고를 채워보세요!`
        }
        </div>
      </div>
    )
  }

RecipesList.propTypes = {
    recipeData: PropTypes.array,
    pageData: PropTypes.array,
    selectedOption: PropTypes.string,
    filteredRecipe: PropTypes.array
}

MaterialBar.propTypes = {
    handleAddClick: PropTypes.func.isRequired,
    materials: PropTypes.array.isRequired,
    handleDeleteMaterial: PropTypes.func.isRequired,
    recipes: PropTypes.number.isRequired,
    handleSelectMat: PropTypes.func
};

EmptyList.propTypes = {
    recipe: PropTypes.bool
}

export default Refrigerator