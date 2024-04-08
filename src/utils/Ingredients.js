import api from "./api";

export default {
    getIngredientsCategory() {
        return api({
            url: '/ingredientsCategory',
            method: 'get'
        })
    },
    getIngredients() {
        return api({
            url: '/ingredients',
            method: 'get'
        })
    }
}