import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss'
import ArrowBackFilled from '../Icons/ArrowBackFilled';
import ArrowForwardFilled from '../Icons/ArrowForwardFilled';

const Pagination = ({ items, onPageChange }) => {
  const [ selectedPage, setSelectedPage ] = useState(0);
  const [ pageList, setPageList ] = useState([]);
  const itemsPerPage = 16
  const totalPages = Math.ceil(items.length/ itemsPerPage);

  useEffect(() => {
    if(totalPages < 5) {
      const newList = [];
      for(let i = 1; i <= totalPages; i++) {
        newList.push(i)
      }
      setPageList(newList)
    } else setPageList([1,2,3,4,5])
  }, [totalPages])

  const handlePageClick = (idx) => {
    setSelectedPage(idx)
    onPageChange(idx);
  };

  const goToNextGroup = () => {
    if (pageList.length === 5 && pageList[4] < totalPages) {
      const newFirstPage = pageList[4] + 1
      const newPageList = []
      for (let i = newFirstPage; i <= Math.min(newFirstPage + 4, totalPages); i++) {
        newPageList.push(i)
      }
      setPageList(newPageList)
      setSelectedPage(newFirstPage-1)
    }
  };

  const goToPrevGroup = () => {
    if (pageList[0] > 1) {
      const newFirstPage = Math.max(pageList[0] - 5, 1);
      const newPageList = []
      for (let i = newFirstPage; i <= Math.min(newFirstPage + 4, totalPages); i++) {
        newPageList.push(i)
      }
      setPageList(newPageList)
      setSelectedPage(newFirstPage+3)
    }
  };

  return (
    <nav className='pagination-container'>
      <button className='arrow-button' onClick={goToPrevGroup} disabled={pageList[0] === 1}>
        <ArrowBackFilled />
      </button>
      <ul className='pagination'>
        {
          pageList.map((page, idx) => (
            <li key={idx}>
              <button
                className={selectedPage === page - 1 ? 'selected' : ''}
                onClick={() => handlePageClick(page - 1)}
              >{page}</button>
            </li>
          ))
        }
      </ul>
      <button className='arrow-button' onClick={goToNextGroup} disabled={pageList[pageList.length - 1] === totalPages}>
        <ArrowForwardFilled />
      </button>
    </nav>
  )
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination;