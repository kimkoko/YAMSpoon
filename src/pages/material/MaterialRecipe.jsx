import React from 'react'
import styles from './MaterialRecipe.module.scss'
import Pagination from '../../components/Pagination/Pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heart from '../../components/Icons/Heart'
import TopButon from '../../components/TopButton/TopButton'
import MaterialBar from './MaterialBar'

const MaterialRecipe = () => {
  return (
    <div>
        <Header />
        <div className={styles['material-container']}>
            <div className={styles['title']}>재료별로 레시피가 준비되었어요!</div>
            <div className={styles['bar-container']}><MaterialBar /></div>
            <div className={styles['result']}>
                <p>검색 결과 <span>35</span>건 조회</p>
                <select name="order">
                    <option value="latest">최신순</option>
                    <option value="likes">인기순</option>
                </select>
            </div>
            <RecipesList />
        </div>
        <Pagination />
        <TopButon/>
        <Footer />
    </div>
  )
}

const RecipesList = () => {
    return (
        <div className={styles['ListWrapper']}>
            <div className={styles['RecipeList']}>
                <div className={styles['RecipeItem']}>
                    <div className={styles["item-img"]}>
                        <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <p>레시피 이름 01</p>
                    <span>
                        {/* <Heart fill={"#D3233A"}/> */}
                        <Heart fill={"#D3233A"}/>
                        56,789
                    </span>
                </div>

                <div className={styles['RecipeItem']}>
                    <div className={styles["item-img"]}>
                        <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <p>레시피 이름 01</p>
                    <span>
                        {/* <Heart fill={"#D3233A"}/> */}
                        <Heart fill={"#D3233A"}/>
                        56,789
                    </span>
                </div>

                <div className={styles['RecipeItem']}>
                    <div className={styles["item-img"]}>
                        <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <p>레시피 이름 01</p>
                    <span>
                        {/* <Heart fill={"#D3233A"}/> */}
                        <Heart fill={"#D3233A"}/>
                        56,789
                    </span>
                </div>

                <div className={styles['RecipeItem']}>
                    <div className={styles["item-img"]}>
                        <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <p>레시피 이름 01</p>
                    <span>
                        {/* <Heart fill={"#D3233A"}/> */}
                        <Heart fill={"#D3233A"}/>
                        56,789
                    </span>
                </div>

                <div className={styles['RecipeItem']}>
                    <div className={styles["item-img"]}>
                        <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <p>레시피 이름 01</p>
                    <span>
                        {/* <Heart fill={"#D3233A"}/> */}
                        <Heart fill={"#D3233A"}/>
                        56,789
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MaterialRecipe