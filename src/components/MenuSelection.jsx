import React, { useState } from "react";
import worldMap from "../assets/images/worldmap.jpg";
import styles from "../styles/MenuSelection.module.css";
import regionLabelDemacia from "../assets/images/labelDemacia.png";
import regionLabelIonia from "../assets/images/labelIonia.png";
import regionLabelShurima from "../assets/images/labelShurima.png";
import playButtonSfx from "../data/buttonSound";

export default function MenuSelection({ onRegionButtonClick }) {

    const regionNames = ['Demacia', 'Ionia', 'Shurima']

    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (button) => {
        setHoveredButton(button);
    }

    const handleMouseLeave = () => {
        setHoveredButton(null);
    }

    return(
        <div className={styles.selectionContainer}>
                <img src={worldMap} alt="Map of Runeterra" className={styles.selectionMap} />
            <div className={styles.buttonContainer}>
                <h2>Please Select A Region</h2>
                <ul>
                    <li>
                        <button 
                            className={styles.pageButton}
                            onMouseEnter={() => handleMouseEnter('Demacia')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => {onRegionButtonClick('Easy'); playButtonSfx()}}>
                            Demacia
                        </button>
                    </li>
                    <li>
                        <button 
                            className={styles.pageButton}
                            onMouseEnter={() => handleMouseEnter('Ionia')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => {onRegionButtonClick('Medium'); playButtonSfx()}}>
                            Ionia
                        </button>
                    </li>
                    <li>
                        <button 
                            className={styles.pageButton}
                            onMouseEnter={() => handleMouseEnter('Shurima')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => {onRegionButtonClick('Hard'); playButtonSfx()}}>
                            Shurima
                        </button>
                    </li>
                </ul>
            </div>
            <div 
                className={`${styles.point} ${styles.point1}`}
                style={{
                boxShadow: hoveredButton === 'Demacia' ? '0px 0px 30px black' : '',}}>
                <img src={regionLabelDemacia} alt="Picture of Region Logo" className={styles.labels}/>
                <h3>{regionNames[0]}</h3>
            </div>
            <div 
                className={`${styles.point} ${styles.point2}`}
                style={{
                boxShadow: hoveredButton === 'Ionia' ? '0px 0px 30px black' : '',}}>
                <img src={regionLabelIonia} alt="Picture of Region Logo" className={styles.labels}/>
                <h3>{regionNames[1]}</h3>
            </div>
            <div 
                className={`${styles.point} ${styles.point3}`}
                style={{
                boxShadow: hoveredButton === 'Shurima' ? '0px 0px 30px black' : '',}}>
                <img src={regionLabelShurima} alt="Picture of Region Logo" className={styles.labels}/>
                <h3>{regionNames[2]}</h3>
            </div>
        </div>
    );
}