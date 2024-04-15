import React, { useState, useEffect } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import Modal from '../../components/Modal/Modal';
import Alert from '../../components/Icons/Alert';
import './EditProfile.scss';
import User from '../../utils/User';
import { useNavigate } from 'react-router-dom';

export default function EditProfile () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [userId, setUserId] = useState(''); // 사용자 아이디
  const [name, setName] = useState(''); // 이름
  const [email, setEmail] = useState(''); // 이메일
  const [password, setPassword] = useState(''); // 비밀번호
  const [nickName, setNickName] = useState(''); // 닉네임
  const [isAdmin, setIsAdmin] = useState(false); // 관리자 여부 
  const [recipe, setRecipe] = useState([]); // 저장한 레시피
  const [ingredients, setIngredients] = useState([]); // 저장한 재료
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();

  // 사용자 ID 임시로 지정
  const id = "u3"

  // 수정할 유저 정보 가져오기
  // 현재 api 미구현으로 추후 확정된 로직에 따라 변경 필요
  useEffect(() => {
    const fetchUser = async () => {
      const response = await User.getUser(id);

      setUserId(response.data.userId);
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setNickName(response.data.nickname);
      setIsAdmin(response.data.isAdmin);
      setRecipe(response.data.recipe);
      setIngredients(response.data.ingredients);
    }

    fetchUser()
  }, [])

  // 정보 수정 함수
  const handleEdit = async (e) => {
    e.preventDefault();

    const newUserInfo = {
      id: id,
      userId: userId,
      name: name,
      email: email,
      password: password,
      nickname: nickName,
      isAdmin: isAdmin,
      recipe: recipe,
      ingredients: ingredients
    }

    if (!name || !nickName) {
      setFormError('※ 모든 필드를 입력해 주세요.');
      return
    } else {
      await User.updateUser(id, newUserInfo);
      setFormError('');
      setEditSuccess(true);
    }
  }

  // 마이 페이지로 이동
  const goToMypage = () => {
    setEditSuccess(false);
    navigate('/mypage')
  }

  // 탈퇴 모달 창 열기
  const handleWithdraw = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const confirmWithdraw = () => {
    // 탈퇴 로직 구현
    User.deleteUser(id);
    setIsModalOpen(false);
    // 메인 페이지로 이동
    navigate('/');
  }
  
  return (
    <div>
      <LoginHeader />
      <div className='edit-container'>
        <p className='edit-title'>정보 수정</p>
        <form>
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input id='name' type='text' placeholder='이름을 입력해 주세요.' value={name} 
            onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor='nickname'>닉네임</label>
            <div className="input-with-button">
              <input id='nickname' type='text' placeholder='닉네임을 입력해 주세요.' value={nickName}
              onChange={(e) => setNickName(e.target.value)}/>
              <button className='notFilled short'>중복 확인</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <input id='id' type='text' value={userId} disabled />
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <input id='email' type='email' value={email} disabled />
          </div>
          {formError && <p className='error-message'>{formError}</p>}
          <div className='button-container'>
            <button type='submit' className='long' onClick={handleEdit}>정보 수정</button>
            <button type='submit' className='long notFilled' onClick={handleWithdraw}>회원 탈퇴</button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          IconComponent={Alert}
          alertBody='정말 탈퇴하시겠습니까?'
          buttonAction={confirmWithdraw}
          actionText='탈퇴'
          hideCloseButton={false}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      {editSuccess && (
        <Modal
          IconComponent={Alert}
          alertBody='회원님의 정보 수정이 완료되었습니다.'
          buttonAction={goToMypage}
          actionText='마이 페이지'
          hideCloseButton={false}
          closeModal={() => setEditSuccess(false)}
        />
      )}
    </div>
  )
}