import React from 'react'
import LoginHeader from '../../components/Header/LoginHeader'
import './SignUp.scss'

const SignUp = () => {
  return (
    <div>
      <LoginHeader />
      <div className='signup-container'>
        <p className='signup-title'>회원가입</p>
        <form> {/* onSubmit={handleSubmit} */}
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input id='name' type='text' placeholder='이름을 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='nickname'>닉네임</label>
            <div className="input-with-button">
              <input id='nickname' type='text' placeholder='닉네임을 입력해 주세요.' />
              <button className='notFilled short'>중복체크</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <div className='input-with-button'>
              <input id='id' type='text' placeholder='아이디를 입력해 주세요.' />
              <button className='notFilled short'>중복체크</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='password'>비밀번호</label>
            <input id='password' type='password' placeholder='비밀번호를 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='passwordConfirm'>비밀번호 확인</label>
            <input id='passwordConfirm' type='password' placeholder='비밀번호를 다시 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <div className="input-with-button">
              <input id='email' type='email' placeholder='이메일을 입력해 주세요.' />
              <button className='notFilled short'>인증</button>
            </div>
            <input type='number' placeholder='인증번호를 입력해 주세요.' />
          </div>
          <button type='submit' className='signup-button long'>회원가입</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp