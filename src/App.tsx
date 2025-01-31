import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/Home';
import PushTheBtnPage from './pages/PushTheBtn/PushTheBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/push-the-btn" element={<PushTheBtnPage />} />
      </Routes>
    </div>
  );
}

export default App;
