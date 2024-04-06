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



// 화제의 레시피 임시 데이터
const slideData = [
  {recipeImg: 'recipe1.png', recipeName: '레시피 이름 01', recipeLike: 56789},
  {recipeImg: 'recipe2.png', recipeName: '레시피 이름 02', recipeLike: 12345}, 
  {recipeImg: 'recipe3.png', recipeName: '레시피 이름 03', recipeLike: 98765},
  {recipeImg: 'recipe4.png', recipeName: '레시피 이름 04', recipeLike: 54321},
  {recipeImg: 'recipe4.png', recipeName: '레시피 이름 06', recipeLike: 500},
  {recipeImg: 'recipe4.png', recipeName: '레시피 이름 07', recipeLike: 1231},
  {recipeImg: 'recipe4.png', recipeName: '레시피 이름 08', recipeLike: 123124},
  {recipeImg: 'recipe4.png', recipeName: '레시피 이름 09', recipeLike: 500},
  {recipeImg: 'recipe4.png', recipeName: '레시피 이름 10', recipeLike: 1231},
]



const Home = () => {

  // 좋아요 많은 순 정렬
  slideData.sort((a, b) => b.recipeLike - a.recipeLike)

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
            {/* <PopularRecipeList/> */}
            <ImageCarousel slideDatas={slideData}/>
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

// const PopularRecipeList = () => {
//   return (
//     <>
//       <div className={styles['popular-list']}>

//         <Swiper
//           navigation={true}
//           loop={true}
//           spaceBetween={35}
//           slidesPerView={2}
//           breakpoints={{
//             900:
//             {
//               slidesPerView: 3
//             },
//             1200:
//             {
//               slidesPerView: 4
//             },
//           }}
//           onSlideChange={() => console.log('slide change')}
//           onSwiper={(swiper) => console.log(swiper)}
//           modules={[Navigation]}
//           className="popularItemSwiper mySwiper"
//           >
        
//           <SwiperSlide className={styles['recipe-items']}>
//             <div className={styles['recipe-item']}>
//               <div className={styles["recipe-img"]}>
//                 <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
//               </div>
//               <div className={styles['ranking']}>1</div>
//               <p>레시피 이름 01</p>
//               <span>
//                 <Heart fill={"#D3233A"}/>
//                 56,789
//               </span>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   )
// }

export default Home
