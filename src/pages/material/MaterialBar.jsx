import React, {useState} from "react";
import styles from './MaterialBar.module.scss'
import Carousel from "../../components/Carousel/Carousel";

const MaterialBar = () => {
    const [ selectedSub, setSelectedSub ] = useState(null);

    const handleSubClick = (idx) => {
        setSelectedSub(selectedSub === idx ? null : idx);
    };
    
    const categoryData = ['가공/유제품', '고기', '곡물', '과일', '면', '빵/떡', '채소', '콩/견과류', '해산물', '햄/소시지']
    const items = 7;

    return (
        
        <div className={styles['bar-container']}>
            <div className={styles["button-box"]}>
                <button className={styles["all"]}>전체</button>

                <div className={styles['main-bar']}>
                    <Carousel CategoryData={categoryData} items={items} showDeleteButton={false} />
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
]

export default MaterialBar