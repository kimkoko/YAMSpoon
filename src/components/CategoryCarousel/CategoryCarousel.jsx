import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../Icons/Arrow';
import './CategoryCarousel.scss'

const CategoryCarousel = ({ CategoryData }) => {
    const [startIndex, setStartIndex] = useState(0); // 시작 인덱스 설정
    const itemsToShow = 6; // 한 번에 표시할 항목 수

    const endIndex = Math.min(startIndex + itemsToShow, CategoryData.length); // 끝 인덱스 계산

    const [selected, setSelected] = useState(Array(CategoryData.length).fill(false));

    const handleSelect = (index) => {
      const newSelected = [...selected];
      newSelected[index] = !newSelected[index];
      setSelected(newSelected);
    };

    const previousCategory = () => {
        if (startIndex !== 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const nextCategory = () => {
        if (endIndex !== CategoryData.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="category-container">
            <button className='arrow-button previous-button' onClick={previousCategory}>
                <Arrow/>
            </button>
            <div className="category-tap-container">
                {CategoryData.slice(startIndex, endIndex).map((category, index) => (
                    <button key={index}
                        className={`category-button ${selected[index] ? 'select-category-button' : ''}`}
                        onClick={() => handleSelect(index)}
                        >{category}</button>
                ))}
            </div>
            <button className='arrow-button next-button' onClick={nextCategory}>
                <Arrow  />
            </button>
        </div>
    );
};

CategoryCarousel.propTypes = {
    CategoryData: PropTypes.array.isRequired,
};

export default CategoryCarousel;
