import { api } from './api';

export default {
  /**
   * @method GET
   * @summary 레시피 전체 조회
   */
  getRecipe() {
    return api({
      url: '/recipes',
      method: 'get',
    });
  },

  /**
   * @method GET
   * @summary 재료별 레시피 조회
   * @param ingredientId 재료 아이디
   */
  getIngredientRecipe(ingredientId) {
    return api({
      url: `/recipes/${ingredientId}`,
      method: 'get',
    });
  },

  /**
   * @method GET
   * @summary 타입별 레시피 조회
   * @param categoryId 타입(카테고리) 아이디
   */
  getCatgory(categoryId) {
    return api({
      url: `/recipes?category=${categoryId}`,
      method: 'get',
    });
  },

  /**
   * @method GET
   * @summary 레시피 상세 조회
   * @param id 레시피 아이디
   */
  getDetailRecipe(id) {
    return api({
      url: `/recipes/detail/${id}`,
      method: 'get',
    });
  },

  /**
   * @method put
   * @summary 레시피 좋아요
   * @param id 레시피 아이디
   */
  putLikeRecipe(id, recipeData) {
    return api({
      url: `/recipes/${id}/like`,
      method: 'put',
      data: recipeData
    });
  },

  /**
   * @method GET
   * @summary 레시피 검색
   */
  getRecipeSearch() {
    return api({
      url: '/recipes/search',
      method: 'get',
    });
  },
};