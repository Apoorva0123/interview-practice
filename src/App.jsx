import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompanies } from './Redux/action';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchCompanies());
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element= {<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
