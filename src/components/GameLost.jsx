import React from "react";
import styles from "../styles/GameLost.module.css";

export default function GameLost({ onRetryClicked, resetGameLogic, onExitClicked }) {
    return(
        <div className={styles.container}>
            <div className={styles.gameLostContainer}>
                <h2>You Lost</h2>
                <button className={styles.pageButton} onClick={() => {onRetryClicked(); resetGameLogic()}}>Retry?</button>
                <button className={styles.pageButton} onClick={() => {onExitClicked(); onRetryClicked()}}>Exit To Menu</button>
            </div>
        </div>
    );
}