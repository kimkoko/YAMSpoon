import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/TopButton/TopButton';
import Plus from '../../components/Icons/Plus';
import Trashcan from '../../components/Icons/Trashcan';
import ImageUpload from '../../components/Icons/ImageUpload';
import AddModal from '../material/AddModal';
import RecipeCategory from '../../utils/RecipeCategory';
import Recipe from '../../utils/Recipe';
import './RecipeRegister.scss';

const RecipeRegister = () => {
    const [ uploadedImage, setUploadedImage ] = useState(null);
    const [ categories, setCategories ] = useState([]);
    const [ ingredientsData, setIngredientsData ] = useState([]);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ ingredient, setIngredient ] = useState([]);
    const [ ingredientName, setIngredientName ] = useState([]);
    const [ sauces, setSauces ] = useState([]);
    const [ recipes, setRecipes ] = useState([]);
    

    const [ formData, setFormData ] = useState({
        name: '',
        description: '',
        content: [],
        ingredients: [],
        sauce: [],
        category: "",
        img: "",
    })

    const { name, description, content, ingredients, sauce, category, img } = formData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 카테고리 데이터 가져오기
                const response = await RecipeCategory.getRecipeCategory();
                const categoryNames = response.data.data;
                setCategories(categoryNames);
        
            } catch (error) {
              throw new Error("데이터 가져오기 실패: ", error);
            }
          };
          
          fetchData();
    }, [])
    
    // 이미지 업로드
    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        setUploadedImage(URL.createObjectURL(imageFile));

         // FormData에 이미지 추가
        const data = new FormData();
        data.append('image', imageFile);    

        setFormData(prevData => ({
            ...prevData,
            img: data
        }))
    }
    
    //  이미지 업로드 버튼 클릭하면 input 버튼 클릭
    const handleImageUploaButtonClick = () => {
        const input = document.querySelector('.image-upload input[type=file]');
        if (input) {
            input.click();
        }
    };
    
    // 레시피 이름 입력
    const handleTitleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            name: e.target.value
        }));
    };
    

    // 레시피 설명 입력
    const handleDescriptionChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            description: e.target.value
        }))
    }

    // 카테고리 선택
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            category: selectedCategory
        }))
    }
  

    // 재료 추가 모달창 버튼
    const ingredientModalClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    // 재료 추가
    const handleAddIngredient = async (newIngredients) => {
        // 이미 추가된 재료 제외
        const updatedIngredients = newIngredients.filter(newIngredient => {
            return !ingredients.some(existingIngredient => existingIngredient.name === newIngredient[1]);
        });

        // ingredient 배열에 새로운 재료 추가
        setIngredient(prevIngredients => {
            return new Promise(resolve => {
                const updatedIngredientsArray = [...prevIngredients, ...updatedIngredients];
                const newArray = updatedIngredientsArray.map(item => item[1]);
                
                 // 새로운 재료 이름 배열 설정
                setIngredientName(newArray);

                resolve(updatedIngredientsArray);
            });
        });

        // 새로운 재료와 재료 수량 초기화
        const updatedIngredientData = [];
        ingredientName.forEach(name => {
            updatedIngredientData.push({ [name]: '' });
        });
        setIngredientsData(updatedIngredientData);  
    };
            
    console.log(ingredientName)
    console.log(ingredientsData);

    // 재료 수량 변경
    const handleIngredientAmountChange = (ingredientName, e) => {
        const { value } = e.target;

        // ingredientsData 업데이트
        setIngredientsData(prevData => ({
            ...prevData,
            [ingredientName]: value
        }));

        // formData의 재료 정보 업데이트
        const updatedIngredientsData = ingredients.map(ingredient => {
            if (ingredient.name === ingredientName) {
                return {
                    ...ingredient,
                    amount: value
                };
            }
            return ingredient;
        });

        const updatedFormData = {
            ...formData,
            ingredients: updatedIngredientsData.map(({ name, amount }) => ({ name, amount }))
        };
        setFormData(updatedFormData);
    };
    // console.log(formData);


    // 재료 삭제 버튼
    const handleRemoveIngredient = (index) => {
        // ingredient 배열에서 삭제
        const updatedIngredients = [...ingredient];
        updatedIngredients.splice(index, 1);
        setIngredient(updatedIngredients);

        // ingredientsData에서 삭제
        const updatedIngredientsData = { ...ingredientsData };
        const removedIngredientName = updatedIngredients[index].name;
        delete updatedIngredientsData[removedIngredientName];
        setIngredientsData(updatedIngredientsData);

        // formData 업데이트
        const updatedFormData = {
            ...formData,
            ingredients: updatedIngredients,
        };
        setFormData(updatedFormData);
    }

    // 소스 탭 추가 버튼
    const sauceAddButton = () => {
        setSauces([...sauces, {"" : ""}])
    }
    
    // 소스 입력
    const handleSauceChange = (index, e) => {
        const { value } = e.target;
        const updatedSauces = sauces.map((sauce, idx) => {
            if (idx === index) {
                return { ...sauce, [name]: value };     
            } else {
                return sauce;
            }
        });
        setSauces(updatedSauces);
    };
    console.log(sauces);


    // 소스 삭제 버튼
    const handleRemoveSauce = (index) => {
        const updatedSauces = [...sauces];
        updatedSauces.splice(index, 1);
        setSauces(updatedSauces);
    }

    // 레시피 입력
    const handleRecipeChange = (index, e) => {
        const { value } = e.target;
        const updatedRecipes = [...formData.content];
        updatedRecipes[index] = value;
        setRecipes(updatedRecipes);

        setFormData(prevData => ({
            ...prevData,
            content: updatedRecipes
        }));
    };


    // 레시피 탭 추가 버튼
    const recipeAddButton = () => {
        setRecipes([...recipes, ''])

        // 레시피 탭 추가 시 formData에 빈 문자열 추가
        setFormData(prevData => ({
            ...prevData,
            content: [...prevData.content, '']
        }));
    }

    // 레시피 삭제 버튼
    const handleRemoveRecipe = (index) => {
        const updatedRecipes = [...recipes];
        updatedRecipes.splice(index, 1);
        setRecipes(updatedRecipes);

        // 레시피 삭제 시 해당 내용 formData에서 제거
        const updatedContent = [...formData.content];
        updatedContent.splice(index, 1);
        setFormData(prevData => ({
            ...prevData,
            content: updatedContent
        }));
    }
    console.log(formData)

    const handleRecipeRegister = async () => {
        try {
            await Recipe.postRecipe({
                name,
                description, 
                content, 
                ingredients, 
                sauce, 
                category, 
                user_like: [], 
                img, 
                creatorId: []
                
            })
        } catch (error) {
            throw new Error('레시피 등록 실패', error);
        }
    }

    return (
        <div>
            <Header />
            <div className='recipe-register-container'>
                <div className='recipe-register-page-title'>
                    <p>레시피 등록</p>
                </div>
                <div className='register-form-container'>
                    <div className='image-register'>
                        <div className='image-upload'>
                            { uploadedImage ? <img className="image-uploaded" src={uploadedImage} alt="imageupload" /> : <ImageUpload />}
                            <input type="file" accept='image/jpg, image/jpeg, image/png' onChange={handleImageUpload} style={{ display: 'none' }} />
                        </div>
                        <button className='image-upload-button' onClick={handleImageUploaButtonClick}>사진 업로드</button>
                    </div>
                    <div className='left-register-container'>
                        <div className='recipe-category-container'>
                            <p>카테고리</p>
                            <select className='recipe-filter' onChange={handleCategoryChange} value={category}>
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
                                value={formData.name}
                                onChange={handleTitleChange}
                                placeholder='레시피 제목을 입력해주세요.' />
                        </div>
                        <div className='recipe-introduction-container'>
                            <p>레시피 설명</p>
                            <textarea
                                className='recipe-introduction'
                                id='recip-introduction'
                                type='text'
                                value={formData.description}
                                onChange={handleDescriptionChange}
                                placeholder='레시피에 대해 소개해주세요.' />
                        </div>
                    </div>
                </div>

                <div className='ingredient-sauce-container'>
                    <div className='ingredient-container'>
                        <div className='ingredients-title'>
                            <p>재료</p>
                            <div className='plus-icon' onClick={ingredientModalClick}>
                                <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                            </div>
                            {isModalOpen && (<AddModal closeModal={ingredientModalClick} handleAddAction={handleAddIngredient}/> )}
                        </div>
                        <div className='ingregdients'>                            
                            {ingredientsData.map((ingredient, index) => (
                                <div className="ingredient" key={index}>
                                    <p>{Object.values(ingredient)[1]}</p>
                                    <input
                                        type="text"
                                        name={Object.values(ingredient)[1]}
                                        value={Object.values(ingredient)[1]} 
                                        onChange={(e) => handleIngredientAmountChange(Object.keys(ingredient)[0], e)}
                                        placeholder="수량을 입력하세요"
                                    />
                                    <div className="trashcan-icon" onClick={() => handleRemoveIngredient(index)}>
                                        <Trashcan />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='sauce-container'>
                        <div className='sauces-title'>
                            <p>소스</p>
                            <div className='plus-icon' onClick = {sauceAddButton}>
                                <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                            </div>
                        </div>
                        <div className='recipe-sauces'>
                            {sauces.map((sauce, index) => (
                                <div className='recipe-sauce' key={index}>
                                    <input 
                                        className='sauce-name'
                                        type='text'
                                        name='name'
                                        value={Object.keys(sauce)[0]}
                                        onChange={(e) => handleSauceChange(index, e)}
                                        placeholder='소스명' />
                                    <input
                                        className='sauce-amount'
                                        type='text'
                                        name='amount'
                                        value={Object.values(sauce)[1]}
                                        onChange={(e) => handleSauceChange(index, e)}
                                        placeholder='소스양 (ex. 3스푼)' />
                                    <div className='trashcan-icon' onClick={() => handleRemoveSauce(index)}>
                                        <Trashcan />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='recipe-input-container'>
                    <div className='recipe-input-title'>
                        <p>레시피 입력</p>
                        <div className='plus-icon' onClick={recipeAddButton}>
                            <Plus width="29px" height="29px" strokeColor="#D3233A" fillColor="#fff" />
                        </div>
                    </div>
                    {recipes.map((recipe, index) => (
                        <div className='recipe-input' key={index}>
                            <p>{index + 1}</p>
                            <input
                                className='recipe-procedure'
                                type='text'
                                placeholder='레시피를 입력해주세요.'
                                value={recipe}
                                onChange={(e) => handleRecipeChange(index, e)}
                            />
                            <div className='trashcan-icon' onClick={() => handleRemoveRecipe(index)}>
                                <Trashcan />
                            </div>
                        </div>
                    ))}
                </div>
                <button className='recipe-register-button' onClick={handleRecipeRegister}>등록하기</button>
            </div>
            <TopButton />
            <Footer />
        </div>
    )
}

export default RecipeRegister;