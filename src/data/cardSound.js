const playCardSfx = () => {
    const buttonClick = new Audio('src/assets/sounds/cardClickSound.mp3');
    buttonClick.volume = 0.3;
    buttonClick.play();
}

export default playCardSfx;
