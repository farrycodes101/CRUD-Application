import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './components/add';
import Update from './components/update';

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />}/>
          <Route path='/update/:id' element={< Update/>} />
        </Routes>
      </div>

  )
}

export default App;
