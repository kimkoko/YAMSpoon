import React from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Heart from './Icons/Heart';

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



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

const likeColor="#D3233A";


// 유저가 저장한 레시피
function UserSave() {
  
  return (
    <>
      <div className='listInner'>
        <div className='saveListBox'>
          <h2 className='title'>내가 저장한 레시피</h2>

          <div className='saveList'>

            {/* 저장한 레시피가 존재할 때 */}
            <Swiper
              navigation={true}
              loop={true}
              spaceBetween={35}
              slidesPerView={2}
              breakpoints={{
                900:
                {
                  slidesPerView: 3
                },
                1200:
                {
                  slidesPerView: 4
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation]}
              className="saveItemSwiper mySwiper"
            >
              
              <SwiperSlide>
                <a href="/recipe">
                  <div className='saveItem'>
                    <div className='imgBox'>
                      <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <div className='infoBox'>
                      <p className='title'>레시피 이름레시피 이름레시피 이름레시피 이름레시피 이름레시피 이름레시피 이름레시피 이름레시피 이름</p>
                      <p className='likes'>
                        <Heart fill={likeColor}/>
                        <span className='likesNum'>1,223</span>
                      </p>
                    </div>
                  </div>
                </a>
                
              </SwiperSlide>

              <SwiperSlide>
                <a href="/recipe">
                  <div className='saveItem'>
                    <div className='imgBox'>
                      <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <div className='infoBox'>
                      <p className='title'>레시피 이름</p>
                      <p className='likes'>
                        <Heart fill={likeColor}/>
                        <span className='likesNum'>1,223</span>
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="/recipe">
                  <div className='saveItem'>
                    <div className='imgBox'>
                      <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <div className='infoBox'>
                      <p className='title'>레시피 이름</p>
                      <p className='likes'>
                        <Heart fill={likeColor}/>
                        <span className='likesNum'>1,223</span>
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="/recipe">
                  <div className='saveItem'>
                    <div className='imgBox'>
                      <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <div className='infoBox'>
                      <p className='title'>레시피 이름</p>
                      <p className='likes'>
                        <Heart fill={likeColor}/>
                        <span className='likesNum'>1,223</span>
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="/recipe">
                  <div className='saveItem'>
                    <div className='imgBox'>
                      <img src={process.env.PUBLIC_URL + '/images/recipe1.png'} alt='image_1'/>
                    </div>
                    <div className='infoBox'>
                      <p className='title'>레시피 이름</p>
                      <p className='likes'>
                        <Heart fill={likeColor}/>
                        <span className='likesNum'>1,223</span>
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>

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



export { UserInfo, UserSave };