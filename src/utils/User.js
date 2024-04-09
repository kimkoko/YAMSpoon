import API from './api';

export default {
  /**
   * @method GET
   * @summary 사용자 정보 조회
   * @param id
   */
  getUser(id) {
    return API({
      url: `/user/${id}`,
      method: 'get'
    })
  },

  /**
   * @method PUT
   * @summary 사용자 정보 업데이트
   * @param id
   */
  updateUser(id) {
    return API({
      url: `/user/${id}`,
      method: 'put'
    })
  },
  
  /**
   * @method DELETE
   * @summary 사용자 정보 삭제(탈퇴)
   * @param id
   */
  deleteUser(id) {
    return API({
      url: `/user/${id}`,
      method: 'delete'
    })
  },

  /**
   * @method POST
   * @summary 회원가입
   */
  createUser() {
    return API({
      url: '/user',
      method: 'post'
    })
  },

  /**
   * @method POST
   * @summary 로그인
   */
  loginUser() {
    return API({
      url: '/user',
      method: 'post'
    })
  },

  /**
   * @method GET
   * @summary 사용자 냉장고 재료 조회
   * @param id
   */
  getUserFridge(id) {
    return API({
      url: `/user/${id}/fridge`,
      method: 'get'
    })
  },

  /**
   * @method PUT
   * @summary 사용자 냉장고 재료 업데이트
   * @param id
   */
  updateUserFridge(id) {
    return API({
      url: `/user/${id}/fridge`,
      method: 'put'
    })
  },

  /**
   * @method PUT
   * @summary 사용자 북마크 업데이트
   * @param id
   */
  updateUserBookmark(id) {
    return API({
      url: `/user/${id}/bookmark`,
      method: 'put'
    })
  },

  /**
   * @method POST
   * @summary 사용자 아이디 찾기
   */
  findUserId() {
    return API({
      url: '/findUserid',
      method: 'post'
    })
  },

  /**
   * @method POST
   * @summary 사용자 비밀번호 찾기
   */
  findUserPassword() {
    return API({
      url: '/findUserpw',
      method: 'post'
    })
  },

  /**
   * @method PUT
   * @summary 비밀번호 재설정
   */
  resetPassword() {
    return API({
      url: '/resetPassword',
      method: 'put'
    })
  },
}