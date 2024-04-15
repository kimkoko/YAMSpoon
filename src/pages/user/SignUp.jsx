import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../../components/Header/LoginHeader';
import User from '../../utils/User';
import { validateEmptyFields } from '../../utils/validateEmptyFields';
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
    password: '',
    passwordConfirm: '',
    email: '',
  });
  const [emailCode, setEmailCode] = useState('');

  const [validation, setValidation] = useState({
    nameError: '',
    nicknameError: '',
    idError: '',
    emailError: '',
    emailSend: false,
    emailCodeError: '',
    passwordError: '',
    passwordConfirmError: '',
    passwordMatch: false,
  });

  const { name, nickname, id, email, password, passwordConfirm } = formData;
  const { nameError, nicknameError, idError, emailError, emailSend, emailCodeError, passwordError, passwordConfirmError, passwordMatch } = validation;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidation({ ...validation, [`${name}Error`]: '' });
  };

  const handleNicknameCheck = async () => {
    // 닉네임 중복 확인
  }

  const handleIdCheck = async () => {
    // 아이디 중복 확인
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    if (passwordConfirm === '') {
      setValidation({
        ...validation,
        passwordError:
          newPassword.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
            ? 'X 비밀번호는 8자 이상이고 특수문자를 포함해야 합니다.'
            : '',
      })
    } else {
      setValidation({
        ...validation,
        passwordError:
          newPassword.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
            ? 'X 비밀번호는 8자 이상이고 특수문자를 포함해야 합니다.'
            : '',
        passwordConfirmError: newPassword !== passwordConfirm ? 'X 입력하신 비밀번호와 일치하지 않습니다.' : '',
        passwordMatch: newPassword === passwordConfirm && newPassword !== ''
      })
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setFormData({ ...formData, passwordConfirm: newPasswordConfirm });
    setValidation({
      ...validation,
      passwordConfirmError: newPasswordConfirm !== password ? 'X 입력하신 비밀번호와 일치하지 않습니다.' : '',
      passwordMatch: newPasswordConfirm === password && newPasswordConfirm !== ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 빈 값 확인
    if (!validateEmptyFields(formData, validation, setValidation)) {
      return;
    }

    // 유효한 값 확인
    if (passwordError) {
      document.getElementById('password').focus();
      return;
    } else if (passwordConfirmError) {
      document.getElementById('passwordConfirm').focus();
      return;
    } else if (emailError) {
      document.getElementById('email').focus();
    }

    // 이메일 인증 확인
    if (!emailSend) {
      setValidation({ ...validation, emailError: '※ 이메일 인증을 해주세요.' });
      return;
    }

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
              className={`${nameError && 'invalid'}`}
            />
            {nameError && <p className="error-message">{nameError}</p>}
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
                className={`${nicknameError && 'invalid'}`}
              />
              <button type="button" className="notFilled short" onClick={handleNicknameCheck}>
                중복 확인
              </button>
            </div>
            {nicknameError && <p className="error-message">{nicknameError}</p>}
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
                className={`${idError && 'invalid'}`}
              />
              <button type="button" className="notFilled short" onClick={handleIdCheck}>
                중복 확인
              </button>
            </div>
            {idError && <p className="error-message">{idError}</p>}
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