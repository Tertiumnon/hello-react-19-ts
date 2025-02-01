import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import UserContext from './contexts/UserContext';
import HomePage from './pages/Home/Home';
import PushTheBtnPage from './pages/PushTheBtn/PushTheBtn';

function App() {
  const [name, setName] = React.useState<string>('');

  return (
    <div className="App">
      <UserContext.Provider value={{name, setName}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/push-the-btn" element={<PushTheBtnPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
