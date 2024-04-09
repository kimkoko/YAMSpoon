import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Refrigerator.module.scss'
import Pagination from '../../components/Pagination/Pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heart from '../../components/Icons/Heart'
import TopButon from '../../components/TopButton/TopButton'
import Carousel from '../../components/Carousel/Carousel';
import AddModal from './AddModal'




const Refrigerator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const [ materials, setMaterials ] = useState(['감자', '계란','양파', '당근', '오이', '김치', '고등어','꽁치' ]);
    const recipes = 4;

  const handleAddClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        console.log(isModalOpen)
    }

    const handleDeleteMaterial = (index) => {
        const updatedMaterials = [...materials];
        updatedMaterials.splice(index, 1); // 올바른 splice 사용법으로 수정
        setMaterials(updatedMaterials);
    }

  return (
    <div>
        <Header />
        <div className={styles['material-container']}>
            <div className={styles['title']}>냉장고 속 재료로 레시피가 준비되었어요!</div>
            <MaterialBar handleAddClick={handleAddClick} materials={materials} handleDeleteMaterial={handleDeleteMaterial} recipes={recipes} />
            <div className={styles['result']}>
                <p>검색 결과 <span>{recipes}</span>건 조회</p>
                <select name="order">
                    <option value="latest">최신순</option>
                    <option value="likes">인기순</option>
                </select>
            </div>
            { recipes === 0 ? <EmptyList /> : <RecipesList />}
        </div>
        {
            isModalOpen && <AddModal closeModal={() => setIsModalOpen(false)}/>
        }
        <Pagination />
        <TopButon/>
        <Footer />
    </div>
  )
}

const MaterialBar = ({ handleAddClick, materials, handleDeleteMaterial, recipes }) => {

    return (
        <div className={styles['bar-container']}>
            <div className={styles['main-bar']}>
                <button className={styles['all']}>전체</button>
                <Carousel CategoryData={materials} items={recipes} showDeleteButton={true} deleteMaterial = {handleDeleteMaterial}/>
            </div>
            <button className={styles['Add']} onClick={handleAddClick}>재료 추가</button>
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
                        <Heart fill={"#D3233A"}/>
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

MaterialBar.propTypes = {
    handleAddClick: PropTypes.func.isRequired,
    materials: PropTypes.array.isRequired,
    handleDeleteMaterial: PropTypes.func.isRequired,
    recipes: PropTypes.number.isRequired
};

export default Refrigerator