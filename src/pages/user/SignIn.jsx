import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import { Link, useNavigate } from 'react-router-dom';
// import User from '../../utils/User';
import { api } from '../../utils/api';
import Modal from '../../components/Modal/Modal';
import Alert from '../../components/Icons/Alert';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const [validation, setValidation] = useState({
    idError: '',
    passwordError: '',
  });

  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const { id, password } = formData;
  const { idError, passwordError } = validation;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidation({ ...validation, [`${name}Error`]: '' });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 빈 값 확인
    const emptyField = Object.keys(formData).find(field => !formData[field]);
    if (emptyField) {
      const inputElement = document.getElementById(emptyField);
      const text = inputElement.getAttribute('placeholder');
      setValidation({ ...validation, [`${emptyField}Error`]: `※ ${text}` });
      if (inputElement) {
        inputElement.focus();
        return;
      }
    }

    const res = await api.get('/user');
    const user = res.data.find(user => user.userId === id && user.password === password);
    if (user) {
      alert(`로그인 성공! 안녕하세요 ${user.name}님`)
      navigate('/');
    } else {
      setErrorModalOpen(true);
    }
  }

  return (
    <div>
      <LoginHeader />
      <div className='signin-container'>
        <p className='signin-title'>로그인</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <input
              id='id'
              name='id'
              type='text'
              placeholder='아이디를 입력해 주세요.'
              value={formData.id}
              onChange={handleInputChange}
            />
            {idError && <p className="error-message">{idError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor='password'>비밀번호</label>
            <input 
              id='password' 
              name='password'
              type='password' 
              placeholder='비밀번호를 입력해 주세요.'
              value={formData.password}
              onChange={handleInputChange}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type='submit' className='signin-button long'>로그인</button>
        </form>
        <div className='link-container'>
          <div className='find-container'>
            <Link to='/find-id'>아이디 찾기</Link>
            <span className='separator'>|</span>
            <Link to='/find-password'>비밀번호 찾기</Link>
          </div>
          <Link to='/signup'>회원가입</Link>
        </div>
      </div>
      {errorModalOpen && (
        <Modal 
          IconComponent={Alert}
          alertBody='아이디 또는 비밀번호가 일치하지 않습니다.'
          buttonAction={() => setErrorModalOpen(false)}
          actionText='확인'
          hideCloseButton={true}
        />
      )}
    </div>
  )
}

export default SignIn;