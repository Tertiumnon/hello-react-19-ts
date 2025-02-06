import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import UserContext from './contexts/UserContext';
import HomePage from './pages/Home/Home';
import PushTheBtnPage from './pages/PushTheBtn/PushTheBtn';
import RenderCounter from './components/RenderCounter/RenderCounter';
import WhatTime from './components/WhatTime/WhatTime';

function App() {
  const [name, setName] = React.useState<string>('');

  return (
    <div className="App">
      <UserContext.Provider value={{userName: name, setUserName: setName}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/push-the-btn" element={<PushTheBtnPage />} />
          <Route path="/what-time" element={<WhatTime />} />
        </Routes>
      </UserContext.Provider>
      <RenderCounter />
    </div>
  );
}

export default App;
