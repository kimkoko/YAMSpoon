import React from "react"
import Heart from '../Icons/Heart';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

const ImageSlide = ({ recipeImg, recipeName, recipeLike, recipeRanking, hideRecipeRanking }) => {

    return (
        <>
					<div className='imageSlide'>
						<Link to="/recipe">
							<div className="recipe-img">
									<img src={process.env.PUBLIC_URL + `/images/${recipeImg}`} alt="레시피 이미지"/>
							</div>
							{!hideRecipeRanking && <div className='ranking'>{recipeRanking}</div>}
							<p className='recipeName'>{recipeName}</p>
							<div className='likes'>
									<span>
									<Heart fill={"#D3233A"}/>
									{recipeLike}
									</span>
							</div>
						</Link>
					</div>
        </>
    )
}



ImageSlide.propTypes = {
	recipeImg: propTypes.string.isRequired,
	recipeName: propTypes.string.isRequired,
	recipeLike: propTypes.number.isRequired,
	recipeRanking: propTypes.number.isRequired,
	hideRecipeRanking: propTypes.bool,
}

export default ImageSlide