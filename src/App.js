import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Home from './page/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
