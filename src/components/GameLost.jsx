import React from "react";
import styles from "../styles/GameLost.module.css";
import playButtonSfx from "../data/buttonSound";

export default function GameLost({ onRetryClicked, resetGameLogic, onExitClicked }) {
    return(
        <div className={styles.container}>
            <div className={styles.gameLostContainer}>
                <h2>You Lost</h2>
                <button className={styles.pageButton} onClick={() => {onRetryClicked(); resetGameLogic(); playButtonSfx()}}>Retry?</button>
                <button className={styles.pageButton} onClick={() => {onExitClicked(); onRetryClicked(); playButtonSfx()}}>Exit To Menu</button>
            </div>
        </div>
    );
}