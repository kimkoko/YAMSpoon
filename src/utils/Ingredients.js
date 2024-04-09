import api from './api';

export default {
  /**
   * @method GET
   * @summary 재료 카테고리 조회
   * @description 재료 1차 카테고리
   */
  getIngredientsCategory() {
    return api({
      url: '/ingredientsCategory',
      method: 'get',
    });
  },
  /**
   * @method GET
   * @summary 재료 조회
   * @description 재료 2차 카테고리
   */
  getIngredients() {
    return api({
      url: '/ingredients',
      method: 'get',
    });
  },
};
