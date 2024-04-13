import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './HomeSlideArrows.scss'
import styles from './Home.module.scss'
import Heart from '../../components/Icons/Heart'
import TopButton from '../../components/TopButton/TopButton'
import Cutlery from '../../components/Icons/Cutlery'
import { Link } from 'react-router-dom'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import _ from "lodash"
import Recipe from '../../utils/Recipe'

const Home = () => {
  const [ sortLikesData, setSortLikesData ] = useState(null)
  const [ newestData, setNewestData ] = useState(null)
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await Recipe.getRecipe()
        const slideDataDeepCopy = _.cloneDeep(response.data)
        const newestData = slideDataDeepCopy.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        setNewestData(newestData.slice(0,4))

        const sortedData = slideDataDeepCopy.sort((a, b) => b.user_like.length - a.user_like.length)
        const slicedData = sortedData.slice(0, 10);
        setSortLikesData(slicedData)

      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);
  
  return (
    <div>
        <Header />
        <div className={styles['banner-container']}>
          <div className={styles['banner']}>
            <img src="../../images/banner_image.png" alt="banner_image" />
            <Link to = "/regrigerator">
                <button className={styles['banner-button']}>
                나만의 냉장고 재료 추가하기
                <Cutlery />
              </button>
            </Link>
          </div>
        </div>
        <div className={styles['recipe-container']}>
          <p className={styles['title']}>화제의 레시피를 알려드릴게요!</p>
          <div className={styles['popular-recipes-scroll']}>
          {sortLikesData && <ImageCarousel slideDatas={sortLikesData} hideRecipeRanking={false} />}
          </div>
        </div>

        <div className={styles['middle-line']}></div>
        
        <div className={styles['recipe-container']}>
          <p className={styles['title']}>최근에 올라온 레시피는 어떤가요?</p>
          {newestData && <RecipeList recipes={newestData}/>}
        </div>

        <TopButton />
        <Footer />
    </div>
  )
}

const RecipeList = ({ recipes }) => {
  return (
    <div className={styles['recipe-items2']}>
      {recipes.map((recipe, index) => (
          <div className={styles['recipe-item']} key={index}>
            <Link to={`/recipes/${recipe.id}`}>
            <div className={styles['recipe-img']}>
              <img src={recipe.img} alt={`image_${index + 1}`} />
            </div>
            <p>{recipe.name}</p>
            <span>
              <Heart fill={"#D3233A"} />
              {recipe.user_like.length}
            </span>
            </Link>
        </div>
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user_like: PropTypes.array.isRequired,
  })).isRequired,
};

export default Home
