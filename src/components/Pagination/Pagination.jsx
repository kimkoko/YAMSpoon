import React, { useState } from 'react';
import './Pagination.scss'
import ArrowBackFilled from '../Icons/ArrowBackFilled';
import ArrowForwardFilled from '../Icons/ArrowForwardFilled';

const Pagination = () => {
  const [ selectedPage, setSelectedPage ] = useState(0);
  const totalPage = ['1', '2', '3', '4']

  const handlePageClick = (idx) => {
    setSelectedPage(idx);
  };

  return (
    <nav className='pagination-container'>
      <ArrowBackFilled />
      <ul className='pagination'>
        {
          totalPage.map((page,idx) => (
            <li key={idx}>
              <button
                className={selectedPage === idx ? 'selected' : ''}
                onClick={() => handlePageClick(idx)}
              >{page}</button>
            </li>
          ))
        }
      </ul>
      <ArrowForwardFilled />
  </nav>
  )
}

export default Pagination;