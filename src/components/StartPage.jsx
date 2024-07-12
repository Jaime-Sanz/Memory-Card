import React from "react";
import styles from '../styles/StartPage.module.css';
import startScreen from "../assets/videos/startscreen.mp4";
import leagueLogo from "../assets/images/LoL_Logo_Rendered_LARGE.png"

export default function StartPage({ onStartButtonClick }) {
    return(
        <div  className={styles.startPageContainer}>
            <video className={styles.backgroundVideo} autoPlay loop muted>
                <source src={startScreen} type="video/mp4"/>
            </video>
            <div className={styles.titleContainer}>
                <img src={leagueLogo} alt="League of Legends Logo" className={styles.leagueLogo}/>
                <h1 className={styles.pageTitle}>Memory Game</h1>
                <button className={styles.pageButton} onClick={() => onStartButtonClick('selection')}>Start Game</button>
            </div>
        </div>
    );
}