import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss'
import ArrowBackFilled from '../Icons/ArrowBackFilled';
import ArrowForwardFilled from '../Icons/ArrowForwardFilled';

const Pagination = ({ totalItems, itemsPerPage, handlePageData }) => {
  const [ selectedPage, setSelectedPage ] = useState(0);
  const [ pageList, setPageList ] = useState([]);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    if(totalPages < 5) {
      const newList = [];
      for(let i = 1; i <= totalPages; i++) {
        newList.push(i)
      }
      setPageList(newList)
    } else setPageList([1,2,3,4,5])
  }, [totalPages])

  useEffect(() => {
    if ( !handlePageData ) return
    handlePageData([selectedPage * itemsPerPage, selectedPage * itemsPerPage + itemsPerPage])
  }, [selectedPage])

  const handlePageClick = (idx) => {
    setSelectedPage(idx)
  };

  const goToNextGroup = () => {
    if (selectedPage + 1 < totalPages) {
      if ((selectedPage + 1) % 5 === 0) {
        const newFirstPage = selectedPage + 1;
        const newPageList = []
        for (let i = newFirstPage + 1; i <= Math.min(newFirstPage + 5, totalPages); i++) {
          newPageList.push(i)
        }
        setPageList(newPageList)
        setSelectedPage(newFirstPage)
      } else {
        setSelectedPage(selectedPage + 1)
      }
    }
  };

  const goToPrevGroup = () => {
    if (selectedPage > 0) {
      if ((selectedPage + 1) % 5 === 1) { 
        const newFirstPage = selectedPage - 4;
        const newPageList = [];
        for (let i = newFirstPage; i <= Math.min(newFirstPage + 4, totalPages); i++) {
          newPageList.push(i);
        }
        setPageList(newPageList);
        setSelectedPage(selectedPage - 1); 
      } else {
        setSelectedPage(selectedPage - 1);
      }
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
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  handlePageData: PropTypes.func
}

export default Pagination;