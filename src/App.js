import React from 'react';
import "./design/styles/Sass/all.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import Layout from './components/Nav/Layout/Layout';
import Details from './pages/Details/Details';
import Basket from './pages/Basket/Basket';
import Profile from './pages/Profile/Profile';
import ProfileOrders from "./components/Profile/ProfileBody/ProfileOrders/ProfileOrders";
import OrderDetail from './components/Profile/ProfileBody/OrderDetail/OrderDetail';
import UserInfo from './components/Profile/ProfileBody/UserInfo/UserInfo';
import Error from './pages/Error/Error';

const App = () => {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='' element={ <Home/>}></Route>
        <Route path=':slug' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Details/>}></Route>
        <Route path='/basket' element={<Basket/>}></Route>
        <Route path='/profil' element={<Profile/>}>
          <Route path='/profil/sifarisler' element={<ProfileOrders/>}></Route>
          <Route path='/profil/sifarisler/:id' element={<OrderDetail/>}></Route>
          <Route path='/profil/melumatlarim' element={<UserInfo/>}/>
        </Route>
        <Route path='*' element={<Error/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App