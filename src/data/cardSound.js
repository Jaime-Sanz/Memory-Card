const playCardSfx = () => {
    const buttonClick = new Audio('/sounds/cardClickSound.mp3');
    buttonClick.volume = 0.3;
    buttonClick.play();
}

export default playCardSfx;
