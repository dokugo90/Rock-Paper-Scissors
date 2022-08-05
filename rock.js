function getUserChoice(userInput) {
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'duke' || userInput == 'Rock' || userInput == 'Paper' || userInput == 'Scissors' || userInput == 'Duke') {
        return userInput
    } else {
        return 'Not a valid input'
    }
};

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random == 0) {
        return 'rock' 
    } else if (random == 1) {
        return 'paper'
    } else if (random == 2) {
        return 'scissors'
    } else {
        return 'Computer error please try again'
    }
};


function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie!'
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        return 'Computer won!'
    } else if (userChoice == 'Rock' && computerChoice == 'paper') {
        return 'Computer won!'
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        return 'You won!'
    } else if (userChoice == 'Paper' && computerChoice == 'rock') {
        return 'You won!'
    } else if (userChoice == 'Scissors' && computerChoice == 'rock') {
        return 'Computer won!'
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        return 'Computer won!'
    } else if (userChoice == 'Rock' && computerChoice == 'scissors') {
        return 'You won!'
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        return 'You won!'
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        return 'Computer won!'
    } else if (userChoice == 'Paper' && computerChoice == 'scissors') {
        return 'Computer won!'
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        return 'You won!'
    } else if (userChoice == 'Scissors' && computerChoice == 'paper') {
        return 'You won!'
    } else if (userChoice == 'duke') {
        return 'Congrats on discovering the cheat code. You won!'
    }
}

const playGame = () => {
/*Enter rock, paper, scissors here in lower case.*/ let userChoice = getUserChoice('').toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You played: ${userChoice}.`);
    console.log(`The Computer played: ${computerChoice}.`);
    console.log(getWinner(userChoice, computerChoice));

}

playGame()