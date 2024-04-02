import React from 'react';
import './pagination.scss'

const Pagination = () => {
  const totalPage = ['1','2']
  return (
    <nav className='pagination-container'>
      <ul className='pagination'>
        {totalPage.map(page => (
          <li key={page}>
            <button>{page}</button>
          </li>
        ))}
        <li>
          <button className='selected'>4</button>
        </li>
      </ul>
  </nav>
  )
}

export default Pagination;