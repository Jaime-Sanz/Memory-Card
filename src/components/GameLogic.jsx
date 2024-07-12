import React, { useState, useEffect } from "react";
import Styles from "../styles/GameLogic.module.css";

export default function GameLogic({ cards, onGameOver, onGameWin }) {

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
        console.log(selectedCards);
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
            <div className={Styles.scoreContainer}>
                <h1>{'Highest Score: ' + highScore} </h1>
                <h1>{'Score: ' + currentScore} </h1>
            </div>
            <div className={Styles.cardContainer}>
            {amountGameCards.map((card) => (
                <div key={card.id} className={Styles.card}>
                    <img src={card.cardData} 
                         alt="Champion Splash Art" 
                         className={Styles.cardImage}
                         onClick={() => cardSelected(card.id)}/>
                </div>
            ))};
            </div>
        </div>
    );
}