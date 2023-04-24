'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){

    //Game Logic:
    const guess = Number(document.querySelector('.guess').value);

        //when there is no input
    if(!guess){
        displayMessage('⛔ No Number!');
        //when player wins
    }else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.guess').disabled = true;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when guess is wrong
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉')

            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('💥You lost the game!');
            document.querySelector('.guess').disabled = true;
            document.querySelector('.score').textContent = 0;
        }
    }


document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').disabled = false;
});


})
