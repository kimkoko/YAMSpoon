import React from 'react'
import LoginHeader from '../../components/Header/LoginHeader'
import './FindId.scss'

const FindId = () => {
  return (
    <div>
      <LoginHeader />
      <div className='findid-container'>
        <p className='findid-title'>아이디 찾기</p>
        <form>
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input id='name' type='text' placeholder='이름을 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <div className="input-with-button">
              <input id='email' type='email' placeholder='이메일을 입력해 주세요.' />
              <button className='notFilled short'>인증</button>
            </div>
            <input type='number' placeholder='인증번호를 입력해 주세요.' />
          </div>
          <button type='submit' className='findid-button long'>아이디 찾기</button>
        </form>
      </div>
    </div>
  )
}

export default FindId