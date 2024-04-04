import React, { useState } from 'react'
import styles from './Refrigerator.module.scss'
import Pagination from '../../components/Pagination/Pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heart from '../../components/Icons/Heart'
import ArrowBack from '../../components/Icons/ArrowBack'
import ArrowForward from '../../components/Icons/ArrowForward'
import Delete from '../../components/Icons/Delete'

const Refrigerator = () => {
  return (
    <div>
        <Header />
        <div className={styles['material-container']}>
            <div className={styles['title']}>재료별로 레시피가 준비되었어요!</div>
            <MaterialBar />
            <div className={styles['result']}>
                <p>검색 결과 <span>{recipes}</span>건 조회</p>
                <select name="order">
                    <option value="latest">최신순</option>
                    <option value="likes">인기순</option>
                </select>
            </div>
            { recipes === 0 ? <EmptyList /> : <RecipesList />}
        </div>
        <Pagination />
        <Footer />
    </div>
  )
}

const materials = ['감자', '계란', '양파', '당근', '오이', '닭고기']
const recipes = 9

const MaterialBar = () => {
    const [ selectedMaterial, setSelectedMaterial ] = useState(null);

    const handleMaterialClick = (idx) => {
        setSelectedMaterial(selectedMaterial === idx ? null : idx);
    };
    
    return (
        <div className={styles['bar-container']}>
            <div className={styles['main-bar']}>
                <button>전체</button>
                <ArrowBack />
                {materials.map((material,idx) => (
                    <button 
                        key={idx}
                        className={selectedMaterial === idx ? styles['selected'] : ''}
                        onClick={() => handleMaterialClick(idx)}
                    >
                    {material}
                    <Delete />
                    </button>
                ))}
                <ArrowForward />
            </div>
            <button className={styles['Add']}>재료 추가</button>
        </div>
    )
}

const RecipesList = () => {
    return (
        <div className={styles['ListWrapper']}>
            <div className={styles['RecipeList']}>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    <p>레시피 이름 01</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    <p>레시피 이름 02</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    <p>레시피 이름 03</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    <p>레시피 이름 04</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_3'/>
                    <p>레시피 이름 05</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_3'/>
                    <p>레시피 이름 06</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_3'/>
                    <p>레시피 이름 07</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_3'/>
                    <p>레시피 이름 08</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
                <div className={styles['RecipeItem']}>
                    <img className={styles['ItemImage']} src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_3'/>
                    <p>레시피 이름 09</p>
                    <span>
                        <Heart />
                        56,789
                    </span>
                </div>
            </div>
        </div>
    )
}

const EmptyList = () => {
  return (
    <div className={styles['ListWrapper']}>
      <div className={styles['EmptyList']}>
      준비된 재료가 없습니다. <br />
      재료 추가 버튼을 이용해 나만의 냉장고를 채워보세요!
      </div>
    </div>
  )
}

export default Refrigerator