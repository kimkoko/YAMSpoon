import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Delete from '../Icons/Delete';
import './Carousel.scss';

const CategoryTap = ({ CategoryData, startIndex, endIndex, selected, handleSelect, deleteMaterial }) => {
    const containerStyle = useMemo(() => {
        return deleteMaterial ? { justifyContent: 'flex-start', flex: 1 } : {justifyContent: 'space-between'};
    }, [deleteMaterial]);

    return (
        <div className='category-tap-container' style={containerStyle}>
            {CategoryData.slice(startIndex, endIndex).map((category, index) => (
                <div key={index} className={`${selected[startIndex + index] ? 'category-item-selected' : 'category-item'}${deleteMaterial ? '-delete' : ''}`}>
                    <button className={`${deleteMaterial ? 'category-button-delete' : 'category-button'}`} onClick={() => handleSelect(startIndex + index)}>{category}</button>
                    {deleteMaterial && <button className='delete-button' onClick={() => deleteMaterial(startIndex + index)}><Delete /></button>}
                </div>
            ))}
        </div>
    )
}

CategoryTap.propTypes = {
    CategoryData: PropTypes.array.isRequired,
    startIndex: PropTypes.number.isRequired,
    endIndex: PropTypes.number.isRequired,
    selected: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
    deleteMaterial: PropTypes.func
}

export default CategoryTap;