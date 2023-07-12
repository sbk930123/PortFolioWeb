import './App.css';
import './fonts/stylesheet.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route scrollRestoration="manual" path='/' element={<MainContent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
