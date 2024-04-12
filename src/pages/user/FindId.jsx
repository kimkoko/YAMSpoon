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
    emailCode: ''
  });

  const [validation, setValidation] = useState({
    emailError: '',
    emailSend: false,
    formError: ''
  });

  const { name, email, emailCode } = formData;
  const { emailError, emailSend, formError } = validation;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleEmailSend = () => {
    setValidation({ ...validation, emailSend: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setValidation({ ...validation, formError: '※ 모든 필드를 입력해 주세요.' });
    } else if (!emailSend) {
      setValidation({ ...validation, formError: '※ 이메일 인증을 해주세요.' });
    } else if (emailError) {
      setValidation({ ...validation, formError: '※ 유효하지 않은 값이 있습니다.' });
    } else {
      setValidation({ ...validation, formError: '' });
      setIsModalOpen(true);
    }
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
            />
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
                disabled={!email || emailSend || emailError !== ''}
              >
                전송
              </button>
            </div>
            {emailSend && (
              <div className="input-with-button">
                <input
                  type="number"
                  placeholder="인증번호를 입력해 주세요."
                  value={emailCode}
                  onChange={handleInputChange}
                  name="emailCode"
                />
                <button type="button" className="notFilled short">인증</button>
              </div>
            )}
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          {formError && <p className="error-message">{formError}</p>}
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