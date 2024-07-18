const playButtonSfx = () => {
    const buttonClick = new Audio('/sounds/buttonclick.mp3');
    buttonClick.volume = 0.4;
    buttonClick.play();
}

export default playButtonSfx;

