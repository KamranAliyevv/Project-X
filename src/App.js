import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes path="/">
        <Route path='' element={ <Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App