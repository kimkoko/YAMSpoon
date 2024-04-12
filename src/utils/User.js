import { api } from './api';

export default {
  /**
   * @method GET
   * @summary 사용자 정보 조회
   * @param id 아이디
   */
  getUser(id) {
    return api({
      url: `/user/${id}`,
      method: 'get'
    })
  },

  /**
   * @method PUT
   * @summary 사용자 정보 업데이트
   * @param newUserInfo 새로운 사용자 정보
   */
  updateUser(id, newUserInfo) {
    return api({
      url: `/user/${id}`,
      method: 'put',
      data: newUserInfo
    })
  },
  
  /**
   * @method DELETE
   * @summary 사용자 정보 삭제(탈퇴)
   * @param id 아이디
   */
  deleteUser(id) {
    return api({
      url: `/user/${id}`,
      method: 'delete'
    })
  },

  /**
   * @method POST
   * @summary 회원가입
   * @param userData 사용자 정보
   */
  createUser(userData) {
    return api({
      url: '/user',
      method: 'post',
      data: userData
    })
  },

  /**
   * @method POST
   * @summary 로그인
   * @param userData 사용자 정보
   */
  loginUser(userData) {
    return api({
      url: '/user',
      method: 'post',
      data: userData
    })
  },

  /**
   * @method GET
   * @summary 사용자 냉장고 재료 조회
   * @param id 아이디
   */
  getUserFridge(id) {
    return api({
      url: `/user/${id}/fridge`,
      method: 'get'
    })
  },

  /**
   * @method PUT
   * @summary 사용자 냉장고 재료 업데이트
   * @param id 아이디
   * @param userData 사용자 정보
   */
  updateUserFridge(id, userData) {
    return api({
      url: `/user/${id}/fridge`,
      method: 'put',
      data: userData
    })
  },

  /**
   * @method PUT
   * @summary 사용자 북마크 업데이트
   * @param id 아이디
   * @param userData 사용자 정보
   */
  updateUserBookmark(id, userData) {
    return api({
      url: `/user/${id}/bookmark`,
      method: 'put',
      data: userData
    })
  },

  /**
   * @method POST
   * @summary 사용자 아이디 찾기
   * @param userData 사용자 정보
   */
  findUserId(userData) {
    return api({
      url: '/findUserid',
      method: 'post',
      data: userData
    })
  },

  /**
   * @method POST
   * @summary 사용자 비밀번호 찾기
   * @param userData 사용자 정보
   */
  findUserPassword(userData) {
    return api({
      url: '/findUserPassword',
      method: 'post',
      data: userData
    })
  },

  /**
   * @method PUT
   * @summary 비밀번호 재설정
   * @param userData 사용자 정보
   */
  resetPassword(userData) {
    return api({
      url: '/resetPassword',
      method: 'put',
      data: userData
    })
  },

  /**
   * @method POST
   * @summary 이메일 인증번호 전송
   * @param email 이메일
   */
  sendEmailCode(email) {
    return api({
      url: '/auth/send-verification-email',
      method: 'post',
      data: email
    })
  },

  /**
   * @method POST
   * @summary 인증번호 확인
   * @param emailData 이메일 정보
   */
  verifyCode(emailData) {
    return api({
      url: '/auth/verify',
      method: 'post',
      data: emailData
    })
  },

  /**
   * @method POST
   * @summary 아이디 중복 체크
   * @param id 아이디
   */
  verifyId(id) {
    return api({
      url: '/auth/verifyId',
      method: 'post',
      data: id
    })
  },

  /**
   * @method POST
   * @summary 닉네임 중복 체크
   * @param nickname 닉네임
   */
  verifyNickname(nickname) {
    return api({
      url: '/auth/verifyNickname',
      method: 'post',
      data: nickname
    })
  },
}