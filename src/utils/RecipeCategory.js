import api from './api';

const getRecipeCategory = () => {
        return api.get('recipeCategory')
            .then((res) => res.data)
            .catch((e) => console.log('Internal Server Error', e))
};

export default getRecipeCategory;