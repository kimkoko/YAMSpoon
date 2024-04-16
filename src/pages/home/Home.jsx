import React,{useEffect,useState} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './HomeSlideArrows.scss'
import './Home.scss'
import TopButton from '../../components/TopButton/TopButton'
import Cutlery from '../../components/Icons/Cutlery'
import { Link } from 'react-router-dom'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import Recipe from '../../utils/Recipe'

const Home = () => {
  const [ sortLikesData, setSortLikesData ] = useState(null)
  const [ newestData, setNewestData ] = useState(null)

  const fetchRecipes = async () => {
    try {
      const newestData = await Recipe.getRecipeRecent()
      setNewestData(newestData.data.data)

      const sortedData = await Recipe.getRecipePopular()
      setSortLikesData(sortedData.data.data)

    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  
  useEffect(() => {
    fetchRecipes();
  }, []);

  const loginRequired = () => {
    return localStorage.getItem('token')
  }
  
  return (
    <div>
        <Header />
        <div className='banner-container'>
          <div className='banner'>
            <img src="../../images/banner_image.png" alt="banner_image" />
            <Link to = {loginRequired() ? "/refrigerator" : "/signin"}>
                <button className='banner-button'>
                나만의 냉장고 재료 추가하기
                <Cutlery />
              </button>
            </Link>
          </div>
        </div>
        <div className='recipe-container'>
          <p className='title'>화제의 레시피를 알려드릴게요!</p>
          <div className='popular-recipes-scroll'>
          {sortLikesData && <ImageCarousel slideDatas={sortLikesData} hideRecipeRanking={false} />}
          </div>
        </div>

        <div className='middle-line'></div>
        
        <div className='recipe-container' style={{ paddingBottom: "82px"}}>
          <p className='title'>최근에 올라온 레시피는 어떤가요?</p>
          { newestData && <ImageCarousel slideDatas={newestData} hideRecipeRanking={true} />}
        </div>

        <TopButton />
        <Footer />
    </div>
  )
}

export default Home
