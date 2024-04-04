import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import TopButton from '../../components/TopButton/TopButton'
import LikeIcon from '../../components/Icons/LikeIcon'
import './Search.scss'

const Search = () => {

    const searchResult = "볶음밥";

    const searchResultCount = 35;
    const likeCount = 58678;

  return (
    <div>
        <Header></Header>
        <div className='search-container'>
            <div className='search-result'>
                <p className='data'><span className='search'>&quot;{searchResult}&quot;</span> 검색 결과</p>
            </div>
            <div className='line-container'>
                <div className='line' />
            </div>
            <div className='search-result-container'>
                <div className='result-container'>
                    <p className='result-count'>검색 결과 <span className="count">{searchResultCount}</span>건 조회</p>
                    <select name="filter">
                        <option value="latest">최신순</option>
                        <option value="useful">유용한순</option>
                        <option value="famous">인기순</option>
                    </select>
                </div>
                <div className='all-image-container'>
                    <div className='images-container'>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                    </div>
                    <div className='images-container'>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img className='recipe-image' src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt="레시피1" />
                            <p className='recipe-name'>레시피 1</p>
                            <div className='like-container'>
                                                                <LikeIcon className='like-icon' fill= '#D3233A' />
                                <p className='like-count'>{likeCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination></Pagination>
        <TopButton></TopButton>
        <Footer></Footer>
    </div>
  )
}

export default Search