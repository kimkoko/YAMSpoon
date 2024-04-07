import React, { useState } from 'react'
import styles from './MaterialRecipe.module.scss'
import Pagination from '../../components/Pagination/Pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heart from '../../components/Icons/Heart'
import TopButon from '../../components/TopButton/TopButton'

import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';

const MaterialBar = () => {
    const [ selectedSub, setSelectedSub ] = useState(null);

    const handleSubClick = (idx) => {
        setSelectedSub(selectedSub === idx ? null : idx);
    };
    
    const categoryData = ['가공/유제품', '고기', '곡물', '과일', '면', '빵/떡', '채소', '콩/견과류', '해산물', '햄/소시지']
    
    return (
        
        <div className={styles['bar-container']}>
            <div className={styles["button-box"]}>
                <button className={styles["all"]}>전체</button>

                <div className={styles['main-bar']}>
                    <CategoryCarousel CategoryData={categoryData}/>
                </div>
            </div>
                
            <div className={styles['sub-bar']}>
                {materials[3].subcategories.map((subcategory, idx) => (
                    <button 
                        key={`0-${subcategory}`}
                        className={selectedSub === idx ? styles['selected'] : ''}
                        onClick={() => handleSubClick(idx)}
                    >
                    {subcategory}
                    </button>
                ))}
            </div>
            
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

const MaterialRecipe = () => {
  return (
    <div>
        <Header />
        <div className={styles['material-container']}>
            <div className={styles['title']}>재료별로 레시피가 준비되었어요!</div>
            <MaterialBar />
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

const materials = [
    {
        id: 1,
        name: '육류',
        subcategories: ['소고기', '돼지고기', '닭고기']
    },
    {
        id: 2,
        name: '유제품',
        subcategories: ['우유', '치즈', '요거트', '요구르트', '크림(생크림)']
    },
    {
        id: 3,
        name: '과일',
        subcategories: ['사과', '배', '바나나', '오렌지', '수박', '토마토', '아보카도']
    },
    {
        id: 4,
        name: '채소',
        subcategories: ['시금치', '대파','양파', '당근']
    },
    {
        id: 5,
        name: '과일',
        subcategories: ['사과', '배']
    },
    {
        id: 6,
        name: '과일',
        subcategories: ['사과', '배']
    },
    {
        id: 7,
        name: '과일',
        subcategories: ['사과', '배']
    }
]

export default MaterialRecipe