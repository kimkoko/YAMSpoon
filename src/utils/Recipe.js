import api from './api';

export default{
    
    // 레시피 전체 조회
    getRecipe() {
        return api({
            url: '/recipes',
            method: 'get'
        })
    },

    // 재료별 레시피 조회
    getIngredientRecipe(ingredientId) {
        return api({
            url: `/recipes/${ingredientId}`,
            method: 'get'
        })
    },

    // 타입별 레시피 조회
    getCatgory(categoryId) {
        return api({
            url: `/recipes/${categoryId}`,
            method: 'get'
        })
    },

    // 레시피 상세 조회
    getDetailRecipe(Id) {
        return api({
            url: `/recipes/detail/${Id}`,
            method: 'get'
        })
    },

    // 레시피 좋아요 조회
    putLikeRecipe(id) {
        return api({
            url: `/recipes/${id}/like`,
            method: 'put'
        })
    },

    // 레시피 검색
    getRecipeSearch() {
        return api({
            url: `/recipes/search`,
            method: 'get'
        })
    }
}