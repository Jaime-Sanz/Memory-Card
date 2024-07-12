import React, { useState } from 'react'
import StartPage from './components/StartPage';
import MenuSelection from './components/MenuSelection';
import GameType from './components/GameType';

export default function App() {

  const [currentScreen ,setCurrentScreen] = useState('start');
  const [gameDifficulty, setgameDifficulty] = useState(0);

  const handleGameDifficulty = (difficulty) => {
    setgameDifficulty(difficulty);
    handleStartButtonClick('game');
  }

  const handleStartButtonClick = (screen) => {
    setCurrentScreen(screen);
  }

  return (
    <>
    {currentScreen === 'start' && <StartPage onStartButtonClick={handleStartButtonClick}/>}
    {currentScreen === 'selection' && <MenuSelection  onRegionButtonClick={handleGameDifficulty}/>}
    {currentScreen === 'game' && <GameType  gameDifficulty={gameDifficulty} />}
    </>
  );
}

