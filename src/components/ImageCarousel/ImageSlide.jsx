import React from "react"
import Heart from '../Icons/Heart';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

const ImageSlide = ({ recipeImg, recipeName, recipeLike }) => {

    return (
        <>
					<div className='imageSlide'>
						<Link to="/recipe">
							<div className="recipe-img">
									<img src={process.env.PUBLIC_URL + `/images/${recipeImg}`} alt="레시피 이미지"/>
							</div>
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
}

export default ImageSlide