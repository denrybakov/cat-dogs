
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Favorite from './components/Favorite';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/cat' element={<Cat />}></Route>
        <Route path='/dog' element={<Dog />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
      </Routes>
    </>
  );
}

export default App;
