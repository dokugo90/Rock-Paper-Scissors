// Player Score and Computer Score
let pScore = 0;
let cScore = 0;

// Html Elements
const start = document.querySelector('.start')
const title = document.querySelector('.main')
const animate = document.querySelector('.intro')
const btn = document.querySelectorAll('.btn')
const restart = document.querySelector('.clear')
const footer = document.querySelector("footer")

// Start Game Button
start.addEventListener('click', () => {
    let pResult = document.querySelector('.Score')
    pResult.textContent = `Player:Computer`
    const pselect = document.querySelector(".pSelect")
    pselect.textContent = '❓'
    const cselect = document.querySelector(".cSelect")
    cselect.textContent = '❓'
    pselect.style.transform = 'scale(1)'
    cselect.style.transform = 'scale(1)'
    start.style.transform = 'scale(0)'
    title.style.transform = 'scale(1)'
    animate.style.transform = 'scale(0)'
    footer.style.transform = 'scale(1)'
    const key = document.querySelector(".rules")
    key.style.display = 'none'
    const btn = document.querySelectorAll(".buttons")
    btn.forEach((button) => 
        button.style.transform = 'scale(1)'
    )
})

// Disable Buttons and increase Opacity
function disable() {
    btn.forEach(button => {
        button.disabled = true
        button.style.opacity = '0.5'
    })
    let pResult =  document.querySelector('.Score');
    let result =  document.querySelector('.result');
    let pselect = document.querySelector(".pSelect")
    let cselect = document.querySelector(".cSelect")

    pselect.style.opacity = '0.5'
    cselect.style.opacity = '0.5'
    result.style.opacity = '0.5'
    pResult.style.opacity = '0.5'
    document.querySelector(".main").style.opacity = '0.5'
    footer.style.opacity = '0.5'
}

//Enable Buttons and reduce Opacity
function enable() {
    btn.forEach((button) => {
        button.disabled = false
        button.style.opacity = '1'
    })
    let pResult =  document.querySelector('.Score');
    let result =  document.querySelector('.result');
    let pselect = document.querySelector(".pSelect")
    let cselect = document.querySelector(".cSelect")

    pselect.style.opacity = '1'
    cselect.style.opacity = '1'
    result.style.opacity = '1'
    pResult.style.opacity = '1'
    document.querySelector(".main").style.opacity = '1'
    footer.style.opacity = '1'
}
//Restart Button
function clear() {
    pScore = 0;
    cScore = 0;
    let result = document.querySelector(".result")
    result.textContent = ''
    result.style.transform = 'scale(0)'
    let pResult = document.querySelector(".Score");
    pResult.textContent = `${pScore}:${cScore}`
    enable()
    restart.style.transform = 'scale(0)'
    const pselect = document.querySelector(".pSelect")
    pselect.textContent = '❓'
    const cselect = document.querySelector(".cSelect")
    cselect.textContent = '❓'
}

// Computer
function computer() {
    let choices = ['✊', '✋', '✌']
    let random  = Math.floor(Math.random() * choices.length)

    if (random == 0) {
        return '✊'
    } else if (random == 1) {
        return '✋'
    } else if (random == 2) {
        return '✌'
    }
}

//Determine Winner
function Winner(playerSelection) {
    let computerSelection = computer();
    let pResult =  document.querySelector('.Score');
    let result =  document.querySelector('.result');
    let pselect = document.querySelector(".pSelect")
    let cselect = document.querySelector(".cSelect")

    if (playerSelection == '✋' && computerSelection == '✊' || 
        playerSelection == '✊' && computerSelection == '✌' ||
        playerSelection == '✌' && computerSelection == '✋') {

            pScore ++;
            pResult.textContent = `${pScore}:${cScore}`;
            result.style.transform = 'scale(1)'
            result.textContent = `You win ${playerSelection} beats ${computerSelection}`
            pselect.textContent = playerSelection;
            cselect.textContent = computerSelection

        if (pScore == 5) {
            result.textContent = `You won the game`
            disable()
            restart.style.transform = 'scale(1)'

    } else if (playerSelection == '✊' && computerSelection == '✋' ||
               playerSelection == '✌' && computerSelection == '✊' ||
               playerSelection == '✋' && computerSelection == '✌') {

                cScore ++;
                pResult.textContent = `${pScore}:${cScore}`
                result.style.transform = 'scale(1)'
                result.textContent = `You lose ${computerSelection} beats ${playerSelection}`
                cselect.textContent = computerSelection
                pselect.textContent = playerSelection

            if (cScore == 5) {
                result.textContent = `You lost the game`
                disable()
                restart.style.transform = 'scale(1)'

            }

    } else if (playerSelection == computerSelection) {
        result.textContent = `It\'s a tie you both played ${playerSelection}`
        cselect.textContent = computerSelection
        pselect.textContent = playerSelection
        result.style.transform = 'scale(1)'
    }
}

//Takes User input 
btn.forEach((button) =>
    button.addEventListener('click', () => {
        Winner(button.textContent)
    })
    )

    // Handle Keyboard Input
function HandleKeyboard(e) {
    if (e.key === 'r') Winner('✊');
    if (e.key === 'p') Winner('✋');
    if (e.key === 's') Winner('✌');
}

//Restart Game
restart.addEventListener("click", clear)
window.addEventListener("keydown", HandleKeyboard)
