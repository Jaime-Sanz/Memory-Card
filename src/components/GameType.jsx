import React, { useState } from "react";
import styles from "../styles/GameType.module.css";
import GameLost from "./GameLost"
import GameWin from "./GameWin";
import GameLogic from "./GameLogic"
import bgDemacia from "../assets/images/demacia.jpg";
import bgIonia from "../assets/images/ionia.jpg";
import bgShurima from "../assets/images/shurima.jpg";
import DemaciaImages from "../data/demaciaImages";
import IoniaImages from "../data/ioniaImages";
import ShurimaImages from "../data/shurimaImages";

export default function GameType({ gameDifficulty }) {

    let currentBackground = '';
    
    const gameSettings = {cardRegion: null, cardAmount: 0, gameDone: 0}

    const imageData = {
        Demacia:[
            {id: 1, cardData: DemaciaImages.Garen}, 
            {id: 2, cardData: DemaciaImages.Fiora}, 
            {id: 3, cardData: DemaciaImages.Lux}, 
            {id: 4, cardData: DemaciaImages.Lucian}, 
            {id: 5, cardData: DemaciaImages.Sylas},
            {id: 6, cardData: DemaciaImages.Morgana},
            {id: 7, cardData: DemaciaImages.Poppy},
            {id: 8, cardData: DemaciaImages.Quinn}
        ],
        Ionia:[
            {id: 1, cardData: IoniaImages.Ahri},
            {id: 2, cardData: IoniaImages.Akali},
            {id: 3, cardData: IoniaImages.Irelia},
            {id: 4, cardData: IoniaImages.Kennen},
            {id: 5, cardData: IoniaImages.Karma},
            {id: 6, cardData: IoniaImages.LeeSin},
            {id: 7, cardData: IoniaImages.Lillia},
            {id: 8, cardData: IoniaImages.Yasuo},
            {id: 9, cardData: IoniaImages.Yone},
            {id: 10, cardData: IoniaImages.Zed}
        ],
        Shurima:[
            {id: 1, cardData: ShurimaImages.Akshan},
            {id: 2, cardData: ShurimaImages.Amumu},
            {id: 3, cardData: ShurimaImages.Azir},
            {id: 4, cardData: ShurimaImages.Naafiri},
            {id: 5, cardData: ShurimaImages.Nasus},
            {id: 6, cardData: ShurimaImages.Rammus},
            {id: 7, cardData: ShurimaImages.Renekton},
            {id: 8, cardData: ShurimaImages.Sivir},
            {id: 9, cardData: ShurimaImages.Taliyah},
            {id: 10, cardData: ShurimaImages.Ksante},
            {id: 11, cardData: ShurimaImages.Xerath}
        ]
    };

    switch(gameDifficulty) {
        case 'Easy':
            gameSettings.cardRegion = imageData.Demacia;
            gameSettings.cardAmount = 3;
            gameSettings.gameDone = 5;
            currentBackground = bgDemacia;
        break;
        case 'Medium':
            gameSettings.cardRegion = imageData.Ionia;
            gameSettings.cardAmount = 5;
            gameSettings.gameDone = 7;
            currentBackground = bgIonia;
        break;
        case 'Hard':
            gameSettings.cardRegion = imageData.Shurima;
            gameSettings.cardAmount = 7;
            gameSettings.gameDone = 9;
            currentBackground = bgShurima;
        break;
    }

    const [gameOver, setGameover] = useState(false);
    const [gameWin, setGameWin] = useState(false);

    const handleGameOver = () => {
        setGameover(true);
    }

    const handleGameWin = () => {
        setGameWin(true);
    }

    
    return(
        <div className={styles.gameContainer} style={{backgroundImage: `url(${currentBackground})`}}>
            {gameOver && <GameLost />}
            {gameWin && <GameWin />}
            <GameLogic 
                cards={gameSettings} 
                onGameOver={handleGameOver}
                onGameWin={handleGameWin}/>
        </div>
    );
}