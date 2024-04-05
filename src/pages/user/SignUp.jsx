import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import './SignUp.scss';

const SignUp = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [formError, setFormError] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  }

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
  }

  const handleIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // 비밀번호 유효성 검사
    if (newPassword.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      setPasswordError('X 비밀번호는 8자 이상이고 특수문자를 포함해야 합니다.');
    } else {
      setPasswordError('');
    }
  }

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);
    // 비밀번호 확인
    if (newPasswordConfirm !== password) {
      setPasswordConfirmError('X 입력하신 비밀번호와 일치하지 않습니다.');
      setPasswordMatch(false);
    } else {
      setPasswordConfirmError('');
      setPasswordMatch(true);
    }
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // 이메일 형식 검사
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newEmail)) {
      setEmailError('X 이메일 형식이 올바르지 않습니다.');
    } else {
      setEmailError('');
    } 
  }

  const handleEmailConfirmChange = (e) => {
    const newEmailConfirm = e.target.value;
    setEmailConfirm(newEmailConfirm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !nickname || !id || !password || !passwordConfirm || !email || !emailConfirm) {
      setFormError('※ 모든 필드를 입력해 주세요.');
    } else {
      setFormError('');
      alert('성공');
    }
  }

  return (
    <div>
      <LoginHeader />
      <div className='signup-container'>
        <p className='signup-title'>회원가입</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input
             id='name'
             type='text'
             placeholder='이름을 입력해 주세요.'
             value={name}
             onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor='nickname'>닉네임</label>
            <div className="input-with-button">
              <input
                id='nickname'
                type='text'
                placeholder='닉네임을 입력해 주세요.'
                value={nickname}
                onChange={handleNicknameChange}
              />
              <button type='button' className='notFilled short'>중복체크</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <div className='input-with-button'>
              <input
                id='id'
                type='text'
                placeholder='아이디를 입력해 주세요.'
                value={id}
                onChange={handleIdChange}
              />
              <button type='button' className='notFilled short'>중복체크</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='password'>비밀번호</label>
            <input 
              id='password' 
              type='password' 
              placeholder='비밀번호를 입력해 주세요.'
              value={password}
              onChange={handlePasswordChange}
              className={`${passwordError && 'invalid'}`}
            />
            {passwordError && <p className='error-message'>{passwordError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor='passwordConfirm'>비밀번호 확인</label>
            <input 
              id='passwordConfirm'
              type='password'
              placeholder='비밀번호를 다시 입력해 주세요.'
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              className={`${passwordConfirmError && 'invalid'}`}
            />
            {passwordConfirmError && <p className='error-message'>{passwordConfirmError}</p>}
            {passwordMatch && <p className='success-message'>O 비밀번호가 일치합니다.</p>}
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <div className="input-with-button">
              <input
                id='email'
                type='email'
                placeholder='이메일을 입력해 주세요.'
                value={email}
                onChange={handleEmailChange}
                className={`${emailError && 'invalid'}`}
              />
              <button type='button' className='notFilled short'>인증</button>
            </div>
            <input
              type='number'
              placeholder='인증번호를 입력해 주세요.'
              value={emailConfirm}
              onChange={handleEmailConfirmChange}
            />
            {emailError && <p className='error-message'>{emailError}</p>}
          </div>
          {formError && <p className='error-message'>{formError}</p>}
          <button type='submit' className='signup-button long'>회원가입</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;