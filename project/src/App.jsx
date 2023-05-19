import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Greet from './Pages/Greet';
import EditUsers from './Pages/EditUsers';
import AddUsers from './Pages/AddUsers';
import SingleUsers from './Pages/SingleUsers';
import Special from './Special';




function App() {
  return (
    <div className='parent-div'>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Greet/>}/>
      <Route path='/edit/:id' element={<EditUsers/>}/>
      <Route path='/add/:id' element={<AddUsers/>}/>
      <Route path='/single/:id' element={<SingleUsers/>}/>
      <Route path='/special' element={<Special/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
