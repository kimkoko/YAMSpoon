import React from 'react'
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



// 화제의 레시피 임시 데이터
const slideLikesData = [
  { name: "오이깍두기1", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}, {"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기2", user_like: [{"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기3", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기4", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}, {"user_id": "asdasdasd"}, {"user_id": "asdasdasd"}, {"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기5", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기6", user_like: [{"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
]



const Home = () => {

  // 좋아요 많은 순 정렬  
  const slideDataDeepCopy = _.cloneDeep(slideLikesData)
  const sortLikesData = slideDataDeepCopy.sort((a, b) => b.user_like.length - a.user_like.length)
  
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
            <ImageCarousel slideDatas={sortLikesData} hideRecipeRanking={false}/>
          </div>
        </div>

        <div className={styles['middle-line']}></div>
        
        <div className={styles['recipe-container']}>
          <p className={styles['title']}>최근에 올라온 레시피는 어떤가요?</p>
          <RecipeList/>
        </div>

        <TopButton />
        <Footer />
    </div>
  )
}

const RecipeList = () => {
  return (
    <div className={styles['recipe-items2']}>
  
      <div className={styles['recipe-item']}>
        <div className={styles['recipe-img']}>
          <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        </div>
        <p>레시피 이름 01</p>
        <span>
          <Heart fill={"#D3233A"}/>
          56,789
        </span>
      </div>

      <div className={styles['recipe-item']}>
        <div className={styles['recipe-img']}>
          <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        </div>
        <p>레시피 이름 01</p>
        <span>
          <Heart fill={"#D3233A"}/>
          56,789
        </span>
      </div>

      <div className={styles['recipe-item']}>
        <div className={styles['recipe-img']}>
          <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        </div>
        <p>레시피 이름 01</p>
        <span>
          <Heart fill={"#D3233A"}/>
          56,789
        </span>
      </div>

      <div className={styles['recipe-item']}>
        <div className={styles['recipe-img']}>
          <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
        </div>
        <p>레시피 이름 01</p>
        <span>
          <Heart fill={"#D3233A"}/>
          56,789
        </span>
      </div>    
    </div>
    
  )
}


export default Home
