import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/TopButton/TopButton';
import Plus from '../../components/Icons/Plus';
import Trashcan from '../../components/Icons/Trashcan';
import './RecipeRegister.scss';

const RecipeRegister = () => {

    return (
        <div>
            <Header />
            <div className='recipe-register-container'>
                <div className='recipe-register-page-title'>
                    <p>레시피 등록하기</p>
                </div>
                <div className='register-form-container'>
                    <div className='image-register'>사진</div>
                    <div className='left-register-container'>
                        <div className='recipe-category-container'>
                            <p>카테고리</p>
                            <select className='recipe-filter'>
                                <option value="korean">한식</option>
                                <option value="chinese">중식</option>
                            </select>
                        </div>
                        <div className='recipe-title-container'>
                            <p>레시피 제목</p>
                            <input
                                className='recipe-title'
                                id="recipe-title"
                                type='text'
                                placeholder='레시피 제목을 입력해주세요.' />
                        </div>
                        <div className='recipe-introduction-container'>
                            <p>레시피 설명</p>
                            <input
                                className='recipe-introduction'
                                id='recip-introduction'
                                type='text'
                                placeholder='레시피에 대해 소개해주세요.' />
                        </div>
                    </div>
                </div>

                <div className='ingredient-sauce-container'>
                    <div className='ingredient-container'>
                        <p>재료</p>
                        <div className='plus-icon'>
                            <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                        </div>
                        <div className='ingregdients'>
                            <div className='ingredient'>
                                <p>당근</p>
                                <input
                                    className='ingredient-count'
                                    type='text'
                                    placeholder='수량 (ex. 4개)' />
                                <div className='trashcan-icon'>
                                    <Trashcan />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sauce-container'>
                        <p>소스</p>
                        <div className='plus-icon'>
                            <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                        </div>
                        <div className='recipe-sauces'>
                            <div className='recipe-sauce'>
                                <input 
                                    className='sauce-name'
                                    type='text'
                                    placeholder='소스명' />
                                <input
                                    className='sauce-amount'
                                    type='text'
                                    placeholder='소스양 (ex. 3스푼)' />
                                <div className='trashcan-icon'>
                                    <Trashcan />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='recipe-input-container'>
                    <p>레시피 입력</p>
                    <div className='plus-icon'>
                        <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                    </div>
                    <div className='recipe-input'>
                        <p>1</p>
                        <input
                            className='recipe-procedure'
                            type='text'
                            placeholder='상세 레시피' />
                    </div>
                </div>
                <button className='recipe-register-button'>등록하기</button>
            </div>
            <TopButton />
            <Footer />
        </div>
    )
}

export default RecipeRegister;