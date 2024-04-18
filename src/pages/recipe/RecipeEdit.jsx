import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/TopButton/TopButton';
import Plus from '../../components/Icons/Plus';
import Trashcan from '../../components/Icons/Trashcan';
import ImageUpload from '../../components/Icons/ImageUpload';
import Recipe from '../../utils/Recipe';
import RecipeCategory from '../../utils/RecipeCategory';
import './RecipeEdit.scss';
import { useParams } from 'react-router-dom';

const RecipeEdit = () => {
    const [ categories, setCategories ] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: [],
        ingredients: [],
        sauce: [],
        recipe_Category: "",
        img: "",
    })

    // 레시피 아이디
    const { recipeId } = useParams();

    // 수정할 레시피 가져오기
    useEffect(() => {
        const fetchRecipe = async () => {
            try{
                // 레시피 정보
                const response = await Recipe.getDetailRecipe(recipeId);
                const { title, description, content, ingredients, sauce, recipe_Category, img} = response.data.data;
                setFormData({ title, description, content, ingredients, sauce, recipe_Category, img });

                // 카테고리 데이터 가져오기
                const categoryResponse = await RecipeCategory.getRecipeCategory();
                const categoryNames = categoryResponse.data.data;
                setCategories(categoryNames);
            }catch(error){
                throw new Error("데이터를 가져오기 실패.", error);
            }
        }

        fetchRecipe();
    }, [recipeId])

    return (
        <div>
            <Header />
            <div className='recipe-edit-container'>
                <div className='recipe-edit-page-title'>
                    <p>레시피 수정</p>
                </div>
                <div className='edit-form-container'>
                    <div className='image-edit'>
                        <div className='image-upload'>
                            <ImageUpload />
                        </div>
                        <button className='image-upload-button'>사진 업로드</button>
                    </div>
                    <div className='left-edit-container'>
                        <div className='recipe-category-container'>
                            <p>카테고리</p>
                            <select className='recipe-filter' value={formData.recipe_Category.name}>
                                {categories.map((category) => (
                                    <option key={category.name} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='recipe-title-container'>
                            <p>레시피 제목</p>
                            <input
                                className='recipe-title'
                                id="recipe-title"
                                type='text'
                                placeholder='레시피 제목을 입력해주세요.'
                                value={formData.title} />
                        </div>
                        <div className='recipe-introduction-container'>
                            <p>레시피 설명</p>
                            <textarea
                                className='recipe-introduction'
                                id='recip-introduction'
                                type='text'
                                placeholder='레시피에 대해 소개해주세요.'
                                value={formData.description} />
                        </div>
                    </div>
                </div>

                <div className='ingredient-sauce-container'>
                    <div className='ingredient-container'>
                        <div className='ingredients-title'>
                            <p>재료</p>
                            <div className='plus-icon'>
                                <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                            </div>
                        </div>
                        <div className='ingregdients'>
                        {formData.ingredients.map((ingredient, index) => (
                                <div className='ingredient' key={index}>
                                    <p>{ingredient.name}</p>
                                    <input
                                        className='ingredient-count'
                                        type='text'
                                        placeholder='수량 (ex. 4개)'
                                        value={ingredient.amount} />
                                    <div className='trashcan-icon'>
                                        <Trashcan />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='sauce-container'>
                        <div className='sauces-title'>
                            <p>소스</p>
                            <div className='plus-icon'>
                                <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                            </div>
                        </div>
                        <div className='recipe-sauces'>
                            {formData.sauce.map((sauce, index) => (
                                <div className='recipe-sauce' key={index}>
                                    <input
                                        className='sauce-name'
                                        type='text'
                                        placeholder='소스명'
                                        value={sauce.name} />
                                    <input
                                        className='sauce-amount'
                                        type='text'
                                        placeholder='소스양 (ex. 3스푼)'
                                        value={sauce.amount} />
                                    <div className='trashcan-icon'>
                                        <Trashcan />
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>

                <div className='recipe-input-container'>
                    <div className='recipe-input-title'>
                        <p>레시피 수정</p>
                        <div className='plus-icon'>
                            <Plus width="29px" height="29px" strokeColor="#D3233A" />
                        </div>
                    </div>
                    {formData.content.map((step, index) => (
                        <div className='recipe-input' key={index}>
                            <p>{index + 1}</p>
                            <input
                                className='recipe-procedure'
                                type='text'
                                placeholder='레시피를 입력해주세요.'
                                value={step} />
                        </div>
                    ))}
                </div>
                <button className='recipe-edit-button'>수정하기</button>
            </div>
            <TopButton />
            <Footer />
        </div>
    )
}

export default RecipeEdit;