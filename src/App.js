import React from 'react';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import Layout from './components/Nav/Layout/Layout';
import Details from './pages/Details/Details';

const App = () => {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='' element={ <Home/>}></Route>
        <Route path=':slug' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Details/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App