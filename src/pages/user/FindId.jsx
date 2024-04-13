import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import Modal from '../../components/Modal/Modal';
import FindIdIcon from '../../components/Icons/FindIdIcon';
import './FindId.scss';

const FindId = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [emailCode, setEmailCode] = useState('');

  const [validation, setValidation] = useState({
    nameError: '',
    emailError: '',
    emailSend: false,
    emailCodeError: '',
  });

  const { name, email } = formData;
  const { nameError, emailError, emailSend, emailCodeError } = validation;

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

    // 이메일 인증 확인
    if (!emailSend) {
      setValidation({ ...validation, emailError: '※ 이메일 인증을 해주세요.' });
      return;
    }

    setIsModalOpen(true);
  }

  return (
    <div>
      <LoginHeader />
      <div className='findid-container'>
        <p className='findid-title'>아이디 찾기</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="이름을 입력해 주세요."
              value={name}
              onChange={handleInputChange}
              className={`${nameError && 'invalid'}`}
            />
            {nameError && <p className="error-message">{nameError}</p>}
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