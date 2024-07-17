import React, { useState, useEffect } from "react";
import Styles from "../styles/GameLogic.module.css";
import leagueLogo from "../assets/images/LoL_Logo_Rendered_LARGE.png"
import playButtonSfx from "../data/buttonSound";
import playCardSfx from "../data/cardSound";

export default function GameLogic({ cards, onGameOver, onGameWin, onGameReset, resetGameLogic, onExitClicked}) {
    console.log(onGameReset);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameLost, setGameLost] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);

    const shuffleArray = (array, limit) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray.slice(0, limit);
    };

    const amountGameCards = shuffleArray(cards.cardRegion, cards.cardAmount);

    const cardSelected = (id) => {
        if(!selectedCards.includes(id) && !gameLost && !gameWon) {
            setSelectedCards([...selectedCards, id]);
            changeScore();
        } else if(!gameLost && !gameWon) {
            onGameOver();
            setGameLost(true);
        }
    }

    const changeScore = () => {
        if(currentScore !== cards.gameDone){
            setCurrentScore(currentScore + 1);
        }     
    };

    useEffect(() => {
        setCurrentScore(0);
        setGameLost(false);
        setGameWon(false);
        setSelectedCards([]);
    }, [onGameReset]);

    useEffect(() => {
        if(currentScore > highScore){
            setHighScore(currentScore);
        }
        if(currentScore === cards.gameDone) {
            setGameWon(true);
            onGameWin();
        }
    }, [currentScore]); 


    return(
        <div>
            <div className={Styles.imgContainer}>
                <img src={leagueLogo} alt="League of Legends Logo" className={Styles.leagueLogo}/>
                <div className={Styles.scoreContainer}>
                    <h1>{'Highest Score: ' + highScore}</h1>
                    <h1>{'Score: ' + currentScore}</h1>
                </div>
                <button className={Styles.pageButton} onClick={() => {onExitClicked(); resetGameLogic(); playButtonSfx()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#cdbe91">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                    </svg>
                </button>
            </div>
            <div className={Styles.cardContainer}>
            {amountGameCards.map((card) => (
                <div key={card.id} className={Styles.card}>
                    <img src={card.cardData} 
                         alt="Champion Splash Art" 
                         className={Styles.cardImage}
                         onClick={() => {cardSelected(card.id); playCardSfx()} }/>
                </div>
            ))};
            </div>
        </div>
    );
}