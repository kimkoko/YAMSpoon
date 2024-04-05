import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Home.module.scss'
import Heart from '../../components/Icons/Heart'
import ArrowBack from '../../components/Icons/ArrowBack'
import ArrowForward from '../../components/Icons/ArrowForward'

const Home = () => {
  return (
    <div>
        <Header />
        <div className={styles['banner-container']}>
          <div className={styles['banner']}></div>
        </div>
        <div className={styles['recipe-container']}>
          <p className={styles['title']}>화제의 레시피를 알려드릴게요!</p>
          <div className={styles['popular-recipes-scroll']}>
            <ArrowBack />
            <PopularRecipeList/>
            <ArrowForward />
          </div>
          
        </div>
        
        <div className={styles['recipe-container']}>
          <p className={styles['title']}>최근에 올라온 레시피는 어떤가요?</p>
          <RecipeList/>
        </div>
        <Footer />
    </div>
  )
}

const RecipeList = () => {
  return (
    <div className={styles['recipe-items']}>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>    
    </div>
    
  )
}

const PopularRecipeList = () => {
  return (
    <div className={styles['recipe-items']}>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <div className={styles['ranking']}>1</div>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <div className={styles['ranking']}>2</div>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <div className={styles['ranking']}>3</div>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>
      <div className={styles['recipe-item']}>
        <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        <div className={styles['ranking']}>4</div>
        <p>레시피 이름 01</p>
        <span>
          <Heart />
          56,789
        </span>
      </div>    
    </div>
    
  )
}

export default Home