import React, { useState } from 'react'
import StartPage from './components/StartPage';
import MenuSelection from './components/MenuSelection';

export default function App() {

  const [currentScreen ,setCurrentScreen] = useState('start');

  const handleStartButtonClick = () => {
    setCurrentScreen('selection');
  }
  return (
    <>
    {currentScreen === 'start' && <StartPage onStartButtonClick={handleStartButtonClick}/>}
    {currentScreen === 'selection' && <MenuSelection />}
    </>
  );
}

