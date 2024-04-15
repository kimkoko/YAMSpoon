import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../../components/Header/LoginHeader';
import { validateEmptyFields } from '../../utils/validateEmptyFields';
// import Modal from '../../components/Modal/Modal';
// import FindPwIcon from '../../components/Icons/FindPwIcon';
import './FindPassword.scss';

const FindPassword = () => {
  const navigate = useNavigate();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    email: '',
  });
  const [emailCode, setEmailCode] = useState('');

  const [validation, setValidation] = useState({
    idError: '',
    emailError: '',
    emailSend: false,
    emailCodeError: ''
  });

  const { id, email } = formData;
  const { idError, emailError, emailSend, emailCodeError } = validation;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidation({ ...validation, [`${name}Error`]: '' });
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setFormData({ ...formData, email: newEmail });
    setValidation({
      ...validation,
      emailError: !emailPattern.test(newEmail) ? 'X 이메일 형식이 올바르지 않습니다.' : ''
    })
  };

  const handleEmailSend = async () => {
    setValidation({ ...validation, emailSend: true, emailError: '' });
    // 이메일 인증번호 전송
  };

  const handleEmailCodeChange = (e) => {
    const newEmailCode = e.target.value;
    setEmailCode(newEmailCode);
  }

  const handleEmailCodeConfirm = async () => {
    // 이메일 인증번호 확인
    if (!emailCode) {
      setValidation({ ...validation, emailCodeError: '※ 인증번호를 입력해 주세요.' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 빈 값 확인
    if (!validateEmptyFields(formData, validation, setValidation)) {
      return;
    }

    // 이메일 인증 확인
    if (!emailSend) {
      setValidation({ ...validation, emailError: '※ 이메일 인증을 해주세요.' });
      return;
    }

    // setIsModalOpen(true);
    navigate('/reset-password');
  }

  return (
    <div>
      <LoginHeader />
      <div className='findpassword-container'>
        <p className='findpassword-title'>비밀번호 찾기</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <input
              id='id'
              type='text'
              name='id'
              placeholder='아이디를 입력해 주세요.'
              value={id}
              onChange={handleInputChange}
              className={`${idError && 'invalid'}`}
            />
            {idError && <p className="error-message">{idError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <div className="input-with-button">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해 주세요."
                value={email}
                onChange={handleEmailChange}
                className={`${emailError && 'invalid'}`}
              />
              <button
                type="button"
                className="notFilled short"
                onClick={handleEmailSend}
                disabled={!email || emailSend || emailError === 'X 이메일 형식이 올바르지 않습니다.'}
              >
                인증
              </button>
            </div>
            {emailSend && (
              <div className="input-with-button">
                <input
                  type="number"
                  placeholder="인증번호를 입력해 주세요."
                  value={emailCode}
                  onChange={handleEmailCodeChange}
                  name="emailCode"
                />
                <button type="button" className="notFilled short" onClick={handleEmailCodeConfirm}>확인</button>
              </div>
            )}
            {emailError && <p className="error-message">{emailError}</p>}
            {emailCodeError && <p className="error-message">{emailCodeError}</p>}
          </div>
          <button type='submit' className='findpassword-button long'>비밀번호 찾기</button>
        </form>
      </div>
      {/* {isModalOpen && (
        <Modal
          IconComponent={FindPwIcon}
          alertBody='elice2024@naver.com로 임시 비밀번호를 전송했습니다.'
          buttonAction={() => setIsModalOpen(false)}
          actionText='확인'
          hideCloseButton={true}
        />
      )} */}
    </div>
  )
}

export default FindPassword;