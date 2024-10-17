'use strict';

function secretNumberGenerator(){
    return (Math.trunc(Math.random() * 20)) + 1;
}
let secretNumber =secretNumberGenerator();

let score = 20;
let highScore = 0;

function displayMessage(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        displayMessage('Must Be A Number!');
    }
    else if (0 > guessNumber || guessNumber > 20) {
       displayMessage('Number must be between 1 and 20 !');
    }
    else {
        if (guessNumber === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
            displayMessage('Correct!');
            document.querySelector('body').style.backgroundColor = "#60b347";


            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        else if (guessNumber != secretNumber) {
            if (score > 0) {
                displayMessage( guessNumber > secretNumber ? "Too High!" : "Too Low!");
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                score = 0;
                displayMessage('You lost the game!');
                document.querySelector('.score') = score;
            }
        }
        // else if (guessNumber < secretNumber) {
        //     if (score > 0) {
        //         document.querySelector('.message').textContent = "Too Low!";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         score = 0;
        //         document.querySelector('.message').textContent = "You lost the game!";
        //     }

        // }
        // else if (guessNumber > secretNumber) {
        //     if (score > 0) {
        //         document.querySelector('.message').textContent = "Too High!";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        // else {
        //     score = 0;
        //     document.querySelector('.message').textContent = "You lost the game!";
        // }

    }
}

)

//Again Click Functionality

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = secretNumberGenerator();
    score = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

})