import React from "react";
import styles from "../styles/GameWin.module.css";
import playButtonSfx from "../data/buttonSound";

export default function GameWin({ onRetryClicked, resetGameLogic, onExitClicked }) {
    return(
        <div className={styles.container}>
            <div className={styles.gameWinContainer}>
                <h2>You Won!</h2>
                <button className={styles.pageButton} onClick={() => {onRetryClicked(); resetGameLogic(); playButtonSfx()}}>Retry?</button>
                <button className={styles.pageButton} onClick={() => {onRetryClicked(); onExitClicked(); playButtonSfx()}}>Exit To Menu</button>
            </div>
        </div>
    );
}