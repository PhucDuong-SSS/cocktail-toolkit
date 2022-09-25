import './App.css';
import Home from './pages';
import {Route, Routes} from 'react-router-dom'
import SingleCocktail from './pages/SingleCocktail';
import Header from './components/Header';

function App() {
  return (
    
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cocktail/:id' element={<SingleCocktail/>}></Route>
   </Routes>
  );
}

export default App;
