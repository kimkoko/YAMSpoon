import React from 'react';
import './Recipe.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { RecipeProfile, RecipeDetails } from '../../components/Recipe';
import TopButton from '../../components/TopButton/TopButton';



function Recipe() {

    return (
        <>
            <Header />
                <div className='inner' style={{"paddingBottom" : "100px"}}>
                    <RecipeProfile />
                    <RecipeDetails />
                    <TopButton />
                </div>
            <Footer />
        </>
    )
}

export default Recipe;