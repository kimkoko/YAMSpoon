import { api } from './api';

export default {
  /**
   * @method GET
   * @summary 사용자 정보 조회
   * @param id
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
   * @param id
   */
  updateUser(id, userData) {
    return api({
      url: `/user/${id}`,
      method: 'put',
      data: userData
    })
  },
  
  /**
   * @method DELETE
   * @summary 사용자 정보 삭제(탈퇴)
   * @param id
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
   * @param id
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
   * @param id
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
   * @param id
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
   */
  findUserPassword(userData) {
    return api({
      url: '/findUserpw',
      method: 'post',
      data: userData
    })
  },

  /**
   * @method PUT
   * @summary 비밀번호 재설정
   */
  resetPassword(userData) {
    return api({
      url: '/resetPassword',
      method: 'put',
      data: userData
    })
  },
}