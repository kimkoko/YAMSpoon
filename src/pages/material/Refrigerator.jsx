import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
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
//import User from '../../utils/User';

const UserData = {
  "_id": {
    "$oid": "66179bca2be66980eb962d12"
  },
  "userId": "applepie",
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "$2b$12$N04a.3Gb5R0We2gi0nnY2.d6rsv4ZV6M.dBMEEBX2Z7cFrcxCZ/du",
  "nickname": "johndoe",
  "isAdmin": false,
  "recipe": [],
  "ingredients": [{
        "_id": "6612527970433cc4f1788b2e",
        "category": "661250b370433cc4f1788b21",
        "name": "계란"
    },
    {
        "_id": "6612531c70433cc4f1788b2f",
        "category": "661250b370433cc4f1788b21",
        "name": "돈까스"
    },
    {
        "_id": "6612535070433cc4f1788b31",
        "category": "661250b370433cc4f1788b21",
        "name": "메추리알"
    },{
      "_id": "6612542670433cc4f1788b3a",
      "category": "661250b370433cc4f1788b21",
      "name": "소고기"
    },
  ],
  "__v": 0
};

const Refrigerator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ materials, setMaterials ] = useState([]);
  const [ filteredRecipe, setFilteredRecipe ] = useState(null)
  const [ totalItems, setTotalItems ] = useState(null)
  const [ pageData, setPageData ] = useState(null)
  const [ pageIndex, setPageIndex ] = useState(null)
  const [ sort , setSort ] = useState('latest')

  const recipesByMaterials = async(ingredient) => {
    const newArr = ingredient.map(item => item[0])
      const newRecipes = []
      await Promise.all(newArr.map(async (item) => {
        const response = await Recipe.getIngredientRecipe(item)
        const newFiltered = response.data.data.recipes
        newFiltered.forEach(item => {
            if( item ) {
              if (!newRecipes.some(recipe => recipe._id === item._id)) newRecipes.push(item)
            }
        })
      }))
      return newRecipes
  }

  const fetchRecipes = async () => {
    try {
      //await User.getUserFridge()
      const ingredient = UserData.ingredients.map(item => [item._id, item.name])
      setMaterials(ingredient)
      const newRecipes = await recipesByMaterials(ingredient)
      setFilteredRecipe(newRecipes)
      setTotalItems(newRecipes.length)
      
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
    else if (sort === 'likes') sortedData.sort((a, b) => b.like.length - a.like.length);
  
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

  const handleDeleteMaterial = async (index) => {
        const updatedMaterials = [...materials];
        updatedMaterials.splice(index, 1); 
        setMaterials(updatedMaterials);
        const updatedRecipes = await recipesByMaterials(updatedMaterials)
        setFilteredRecipe(updatedRecipes)
  }

  const handleSortChange = (e) => {
        setSort(e.target.value)
  }
  const handlePageData = (data) => {
        setPageIndex([data[0], data[1]])
  }
  const handleAddAction = (dataArray) => {
    const newItems = dataArray.filter(item => !materials.some(mat => mat[0] === item[0]))

    const newArr = [...materials, ...newItems]

    setMaterials(newArr)
  };

  const handleSelectMat = async (dataArr) => {
    const newArr = []
    await Promise.all(dataArr.map(async (isTrue, idx) => {
      if (isTrue) {
          const response = await Recipe.getIngredientRecipe(materials[idx][0]);
          const newFiltered = response.data.data.recipes
          newFiltered.forEach(item => {
            if( item ) {
              if (!newArr.some(recipe => recipe._id === item._id)) newArr.push(item)
            }
          })   
      }
    }));
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
            : !filteredRecipe || filteredRecipe.length === 0 ? <EmptyList recipe />
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
    const categoryData = materials.map(item => item[1])
    return (
        <div className='bar-container'>
            <div className='main-bar'>
                <Carousel 
                    CategoryData={categoryData} 
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
                                <Link to={`/recipes/${item._id}`}>
                                    <div className="item-img">
                                        <img className='ItemImage' src={item.img} alt='image_1' />
                                    </div>
                                    <p>{item.title}</p>
                                    <span>
                                        <Heart fill={"#D3233A"} />
                                        {item.like.length}
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


const EmptyList = ({recipe }) => {
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
    recipe: PropTypes.bool,
}

export default Refrigerator