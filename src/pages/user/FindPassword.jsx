import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import Modal from '../../components/Modal/Modal';
import FindPwIcon from '../../components/Icons/FindPwIcon';
import './FindPassword.scss';

const FindPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFindPw = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <div>
      <LoginHeader />
      <div className='findpassword-container'>
        <p className='findpassword-title'>비밀번호 찾기</p>
        <form onSubmit={handleFindPw}>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <input id='id' type='text' placeholder='아이디를 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <div className="input-with-button">
              <input id='email' type='email' placeholder='이메일을 입력해 주세요.' />
              <button className='notFilled short'>인증</button>
            </div>
            <input type='number' placeholder='인증번호를 입력해 주세요.' />
          </div>
          <button type='submit' className='findpassword-button long'>임시 비밀번호 전송</button>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          IconComponent={FindPwIcon}
          alertBody='elice2024@naver.com로 임시 비밀번호를 전송했습니다.'
          buttonAction={() => setIsModalOpen(false)}
          actionText='확인'
          hideCloseButton={true}
        />
      )}
    </div>
  )
}

export default FindPassword