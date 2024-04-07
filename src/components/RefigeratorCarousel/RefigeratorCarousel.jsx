import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../Icons/Arrow';
import Delete from '../Icons/Delete'
import './RefigeratorCarousel.scss'

const RefigeratorCarousel = ({ materials }) => {
    const [startIndex, setStartIndex] = useState(0); // 시작 인덱스 설정
    const itemsToShow = 6; // 한 번에 표시할 항목 수

    const endIndex = Math.min(startIndex + itemsToShow, materials.length); // 끝 인덱스 계산

    const [selected, setSelected] = useState(Array(materials.length).fill(false));

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
        if (endIndex !== materials.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="material-container">
            <button className='arrow-button previous-button' onClick={previousCategory}>
                <Arrow/>
            </button>
            <div className="material-tap-container">
                {materials.slice(startIndex, endIndex).map((category, index) => (
                    <div key={index} 
                    className={`button-container ${selected[index] ? 'select-material-button' : ''}`}
                    onClick={() => handleSelect(index)}>
                        <button
                            className='material-button'
                            onClick={() => handleSelect(index)}
                            >{category}</button>
                        <button 
                        className='delete-button' 
                        ><Delete /></button>
                    </div>
                ))}
            </div>
            <button className='arrow-button next-button' onClick={nextCategory}>
                <Arrow  />
            </button>
        </div>
    );
};

RefigeratorCarousel.propTypes = {
    materials: PropTypes.array.isRequired,
};

export default RefigeratorCarousel;
