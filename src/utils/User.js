import API from './api';

export default {
  /**
   * 사용자 정보 조회
   */
  getUser(id) {
    return API({
      url: `/user/${id}`,
      method: 'get'
    })
  },
  /**
   * 사용자 정보 업데이트
   */
  updateUser(id) {
    return API({
      url: `/user/${id}`,
      method: 'put'
    })
  },
  /**
   * 사용자 정보 삭제(탈퇴)
   */
  deleteUser(id) {
    return API({
      url: `/user/${id}`,
      method: 'delete'
    })
  },
  /**
   * 회원가입
   */
  createUser() {
    return API({
      url: '/user',
      method: 'post'
    })
  },
  /**
   * 로그인
   */
  loginUser() {
    return API({
      url: '/user',
      method: 'post'
    })
  },
  /**
   * 사용자 냉장고 재료 조회
   */
  getUserFridge(id) {
    return API({
      url: `/user/${id}/fridge`,
      method: 'get'
    })
  },
  /**
   * 사용자 냉장고 재료 업데이트
   */
  updateUserFridge(id) {
    return API({
      url: `/user/${id}/fridge`,
      method: 'put'
    })
  },
  /**
   * 사용자 북마크 업데이트
   */
  updateUserBookmark(id) {
    return API({
      url: `/user/${id}/bookmark`,
      method: 'put'
    })
  },
  /**
   * 사용자 아이디 찾기
   */
  findUserId() {
    return API({
      url: '/findUserid',
      method: 'post'
    })
  },
  /**
   * 사용자 비밀번호 찾기
   */
  findUserPassword() {
    return API({
      url: '/findUserpw',
      method: 'post'
    })
  },
  /**
   * 비밀번호 재설정
   */
  resetPassword() {
    return API({
      url: '/resetPassword',
      method: 'put'
    })
  },
}