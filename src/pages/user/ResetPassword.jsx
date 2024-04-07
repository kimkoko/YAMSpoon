import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import './ResetPassword.scss';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

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

  return (
    <div>
      <LoginHeader />
      <div className='reset-container'>
        <p className='reset-title'>비밀번호 재설정</p>
        <form>
          <div className="form-group">
            <label htmlFor='password'>새 비밀번호</label>
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
            <label htmlFor='passwordConfirm'>새 비밀번호 확인</label>
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
          <button type='submit' className='reset-button long'>비밀번호 재설정</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword;