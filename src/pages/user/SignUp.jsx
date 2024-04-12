import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../../components/Header/LoginHeader';
import User from '../../utils/User';
import Modal from '../../components/Modal/Modal';
import Check from '../../components/Icons/Check';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    id: '',
    email: '',
    emailCode: '',
    password: '',
    passwordConfirm: ''
  });

  const [validation, setValidation] = useState({
    emailError: '',
    emailSend: false,
    passwordError: '',
    passwordConfirmError: '',
    passwordMatch: false,
    formError: ''
  });

  const { name, nickname, id, email, emailCode, password, passwordConfirm } = formData;
  const { emailError, emailSend, passwordError, passwordConfirmError, passwordMatch, formError } = validation;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    setValidation({
      ...validation,
      passwordError:
        newPassword.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
          ? 'X 비밀번호는 8자 이상이고 특수문자를 포함해야 합니다.'
          : '',
      passwordConfirmError: newPassword !== passwordConfirm ? 'X 입력하신 비밀번호와 일치하지 않습니다.' : '',
      passwordMatch: newPassword === passwordConfirm
    })
  };

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setFormData({ ...formData, passwordConfirm: newPasswordConfirm });
    setValidation({
      ...validation,
      passwordConfirmError: newPasswordConfirm !== password ? 'X 입력하신 비밀번호와 일치하지 않습니다.' : '',
      passwordMatch: newPasswordConfirm === password
    })
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !nickname || !id || !password || !passwordConfirm || !email) {
      setValidation({ ...validation, formError: '※ 모든 필드를 입력해 주세요.' });
    } else if (!emailSend) {
      setValidation({ ...validation, formError: '※ 이메일 인증을 해주세요.' });
    } else if (passwordError || passwordConfirmError || emailError) {
      setValidation({ ...validation, formError: '※ 유효하지 않은 값이 있습니다.' });
    } else {
      setValidation({ ...validation, formError: '' });

      const userData = {
        userId: id,
        name,
        email,
        password,
        nickname,
        isAdmin: false,
        recipe: [],
        ingredients: []
      };
      await User.createUser(userData);

      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <LoginHeader />
      <div className="signup-container">
        <p className="signup-title">회원가입</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">이름</label>
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
            <label htmlFor="nickname">닉네임</label>
            <div className="input-with-button">
              <input
                id="nickname"
                type="text"
                name="nickname"
                placeholder="닉네임을 입력해 주세요."
                value={nickname}
                onChange={handleInputChange}
              />
              <button type="button" className="notFilled short">
                중복체크
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="id">아이디</label>
            <div className="input-with-button">
              <input
                id="id"
                type="text"
                name="id"
                placeholder="아이디를 입력해 주세요."
                value={id}
                onChange={handleInputChange}
              />
              <button type="button" className="notFilled short">
                중복체크
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={handlePasswordChange}
              className={`${passwordError && 'invalid'}`}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 다시 입력해 주세요."
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              className={`${passwordConfirmError && 'invalid'}`}
            />
            {passwordConfirmError && <p className="error-message">{passwordConfirmError}</p>}
            {passwordMatch && <p className="success-message">O 비밀번호가 일치합니다.</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
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
          <button type="submit" className="signup-button long">회원가입</button>
        </form>
      </div>
      {isModalOpen && (
        <Modal 
          IconComponent={Check}
          alertBody='회원가입이 완료되었습니다.'
          buttonAction={() => navigate('/signin')}
          actionText='확인'
          hideCloseButton={true}
        />
      )}
    </div>
  );
};

export default SignUp;