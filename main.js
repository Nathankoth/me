
const word = document.querySelector('.gameName');
const startGame = document.querySelector('.btn');
let count = 0;


startGame.addEventListener("click" , () => {
    count = Math.floor(Math.random()*3);

    let gameResult;
    if (count === 0){
        gameResult = 'rock';
    }else if (count === 1){
        gameResult = 'paper';
    }else {
        gameResult = 'scissors';
    }
    word.textContent = gameResult;
});



