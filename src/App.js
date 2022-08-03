
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Restaurant />}></Route>
        <Route path='/home' element={<Restaurant />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
