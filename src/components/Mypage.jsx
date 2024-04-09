import React from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'


// 유저 정보
function UserInfo({ userName }) {

  // 정보 수정 페이지 이동
  const navigate = useNavigate();

  const navigateToEditProfile = () => {
    navigate('/edit-profile')
  }


  // 필요한 props : 유저 이름, 정보수정 클릭 시 이벤트
  return (
    <>
      <div className='inner'>
        <div className='titleBox'>
          <h2 className='pageTitle'>마이 페이지</h2>
        </div>
        
        <div className='userBox'>
          <p>
            <span className='name'>{userName}</span> 님 안녕하세요!
          </p>

          <button type='button' className='edit notFilled' onClick={navigateToEditProfile}>정보 수정</button>
        </div>
      </div>
    </>
  )
}


// 유저 정보 props 검사
UserInfo.propTypes = {
  userName: propTypes.string.isRequired,
}



// 유저가 저장한 레시피
function UserSave() {

  
  return (
    <>
      <div className='listInner'>
        <div className='saveListBox'>
          <h2 className='title'>내가 저장한 레시피</h2>

          <div className='saveList'>

            {/* 저장한 레시피가 존재할 때 */}
            <ImageCarousel slideDatas={slideData} hideRecipeRanking={true}/>

            {/* 저장한 레시피가 없을 때 */}
            <div className='empty' style={{"display":"none"}}>
              <p>저장된 레시피가 없습니다.</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}


// 임시 데이터
const slideData = [
  { name: "오이깍두기1", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}, {"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기2", user_like: [{"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기3", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기4", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}, {"user_id": "asdasdasd"}, {"user_id": "asdasdasd"}, {"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기5", user_like: [{"user_id": "asdasdasd"}, {"user_id": "asdadas"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
  { name: "오이깍두기6", user_like: [{"user_id": "asdasdasd"}],img: "https://2bob.co.kr/data/recipe/20210712181218-TKL3I.jpg"},
]




export { UserInfo, UserSave };