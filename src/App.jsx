import './assets/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MaterialRecipe from './pages/material/MaterialRecipe';
import Refrigerator from './pages/material/Refrigerator';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/recipe/Search';
import TypeRecipe from './pages/recipe/TypeRecipe';
import EditProfile from './pages/user/EditProfile';
import FindId from './pages/user/FindId';
import FindPassword from './pages/user/FindPassword';
import MyPage from './pages/user/MyPage';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/material-recipe" element={<MaterialRecipe />} /> 
      <Route path="/regrigerator" element={<Refrigerator />} /> 
      <Route path="/recipe" element={<Recipe />} /> 
      <Route path="/search" element={<Search />} /> 
      <Route path="/type-recipe" element={<TypeRecipe />} /> 
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/find-id" element={<FindId />} />
      <Route path="/find-password" element={<FindPassword />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;