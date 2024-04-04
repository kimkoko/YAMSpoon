import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import Modal from '../../components/Modal/Modal';
import FindIdIcon from '../../components/Icons/FindIdIcon';
import './FindId.scss';

const FindId = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFindId = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <div>
      <LoginHeader />
      <div className='findid-container'>
        <p className='findid-title'>아이디 찾기</p>
        <form onSubmit={handleFindId}>
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input id='name' type='text' placeholder='이름을 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <div className="input-with-button">
              <input id='email' type='email' placeholder='이메일을 입력해 주세요.' />
              <button className='notFilled short'>인증</button>
            </div>
            <input type='number' placeholder='인증번호를 입력해 주세요.' />
          </div>
          <button type='submit' className='findid-button long'>아이디 찾기</button>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          IconComponent={FindIdIcon}
          alertBody='ㅇㅇㅇ님의 아이디는 eli**** 입니다.'
          buttonAction={() => setIsModalOpen(false)}
          actionText='확인'
          hideCloseButton={true}
        />
      )}
    </div>
  )
}

export default FindId;