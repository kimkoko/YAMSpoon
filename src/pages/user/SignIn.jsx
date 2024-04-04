import React from 'react'
import LoginHeader from '../../components/Header/LoginHeader'
import { Link } from 'react-router-dom'
import './SignIn.scss'

const SignUp = () => {
  return (
    <div>
      <LoginHeader />
      <div className='signin-container'>
        <p className='signin-title'>로그인</p>
        <form>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <input id='id' type='text' placeholder='아이디를 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='password'>비밀번호</label>
            <input id='password' type='password' placeholder='비밀번호를 입력해 주세요.' />
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
    </div>
  )
}

export default SignUp