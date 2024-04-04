import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Save from "./Icons/Save";
import Heart from "./Icons/Heart";
import Check from "./Icons/Check";
// import Alert from "./Icons/Alert";
// import Modal from "./Modal/Modal";


// 레시피 사진, 정보
function RecipeProfile() {
    // 좋아요 갯수, 상태 관리 => 좋아요 갯수는 추후에 로컬스토리지에 저장시켜야함
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    // 회원 여부를 나타내는 상태 변수
    // const [isMember, setIsMember] = useState(true);

    // const navigate = useNavigate();

    // 저장하기 버튼 클릭 시
    // const saveHandle = () => {
    //     // 사용자가 회원인지 여부를 홧인
    //     if(isMember) {
    //         setIsMember(true);
    //     } else {
    //         setIsMember(false);
    //     }
    // }

    // 좋아요 버튼 클릭 시 => toggle
    const toggleLike = () => {
        if (liked)  {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }

        setLiked(!liked);
    }


    return (
        <>
            <div className='recipeTop'>
                <div className='recipeImgBox'>
                    <p className='recipeImg'>
                        <img src='images/recipe5.png' alt='recipeImg' />
                    </p>
                    <div className='saveAndLikes'>
                        <button type='button' className='saveBtn'>
                            <Save />
                            <span>저장하기</span>
                        </button>
                        <button type='button' className='likesBtn' onClick={toggleLike}>
                            {
                                !liked ? <Heart fill='none' /> : <Heart fill='#D3233A' />
                            }
                            <span>{likeCount}</span>
                        </button>
                    </div>
                </div>
                <div className='recipeInfo'>
                    <p className='category'>양식</p>
                    <h3 className='recipeName'>연어 구이로 만든 연어 구이 샐러드</h3>
                    <p className='recipeText'>
                        계란은 단백질이 풍부하고 칼로리가 낮아 다이어트에 좋은 식품! 또 계란 노른자에는 루테인 성분이 풍부하여 눈 건강에도 도움이 되며 탈모 예방에도 효과적이라고 해요. 이렇게 몸에 좋은 두 가지 재료를 함께 볶아낸다면 얼마나 맛있게요?
                    </p>
                </div>
            </div> 

            {/* <Modal 
                IconComponent={() => <Alert/>}
                alertBody='로그인 후 이용이 가능합니다.'
                buttonAction={() => navigate('/signin')} 
                actionText='확인'
                hideCloseButton={true}
            />  */}

        </>
    )
}


// 재료, 소스, 레시피
function RecipeDetails () {
    return (
        <>
            <div className='recipeDetailBox'>
                <div className='marterialAndSauce'>
                    <div className='materialBox Boxs'>
                        <h4 className='title'>재료 준비</h4>
                        <ul className='materialList material'>
                            <li className='material'>
                                <span className='materialName'><Check /> 연어</span>
                                <span className='materialQuantity'>500g</span>
                            </li>
                            <li className='material'>
                                <span className='materialName'><Check /> 연어</span>
                                <span className='materialQuantity'>500g</span>
                            </li>
                            <li className='material'>
                                <span className='materialName'><Check /> 연어</span>
                                <span className='materialQuantity'>500g</span>
                            </li>
                        </ul>
                    </div>
                    <div className='sauceBox Boxs'>
                        <h4 className='title'>소스 준비</h4>
                        <ul className='materialList sauce'>
                            <li className='material'>
                                <span className='materialName'><Check /> 오리엔탈 소스</span>
                                <span className='materialQuantity'>500g</span>
                            </li>
                            <li className='material'>
                                <span className='materialName'><Check /> 참기름</span>
                                <span className='materialQuantity'>500g</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='recipeTextBox'>
                    <h4 className='title'>레시피</h4>
                    <p>
                        1. 연어는 먹기 좋은 크기로 썰어주세요. <br />   
                        2. 연어는 먹기 좋은 크기로 썰어주세요. <br />
                        3. 연어는 먹기 좋은 크기로 썰어주세요. <br />
                    </p>
                </div>
            </div>
        </>
    )
}

export { RecipeProfile, RecipeDetails };
