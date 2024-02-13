import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLogin/>} />
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
