import React, { useState, useRef } from 'react'
import StartPage from './components/StartPage';
import MenuSelection from './components/MenuSelection';
import GameType from './components/GameType';
import './styles/index.css';
import styles from './styles/App.module.css'
import playButtonSfx from './data/buttonSound';

export default function App() {

  const [currentScreen ,setCurrentScreen] = useState('start');
  const [gameDifficulty, setgameDifficulty] = useState(0);
  const [music, setMusic] = useState(false);


  const audioRef = useRef(new Audio('/sounds/backgroundMusic.mp3'));

  audioRef.current.volume = 0.06;
  audioRef.current.loop = true; 

  const handleGameDifficulty = (difficulty) => {
    setgameDifficulty(difficulty);
    handleStartButtonClick('game');
  }

  const handleStartButtonClick = (screen) => {
    setCurrentScreen(screen);
  }

  const handleExitScreenClicked = () => {
    setCurrentScreen('start');
  }

  const setMusicMode = () => {
    setMusic(prevMusic => {
      if (!prevMusic) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      return !prevMusic;
    });
  }

  const openGithub = () => {
    window.open('https://github.com/Jaime-Sanz/Memory-Card')
  }

  return (
    <>
      {currentScreen !== 'game' && (
        <>
          <button className={styles.gitHubButton} onClick={() => { openGithub(); playButtonSfx(); }}></button>
          <button className={styles.soundButton} onClick={() => { setMusicMode(); playButtonSfx(); }}>
            {music === false ?  
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cdbe91">
                <path d="m616-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-496-40v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z"/>
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cdbe91">
                <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/>
              </svg>}
          </button>
        </>
      )}
      {currentScreen === 'start' && <StartPage onStartButtonClick={handleStartButtonClick} />}
      {currentScreen === 'selection' && <MenuSelection onRegionButtonClick={handleGameDifficulty} />}
      {currentScreen === 'game' && <GameType gameDifficulty={gameDifficulty} onExitButtonClicked={handleExitScreenClicked} />}
    </>
  );
}

