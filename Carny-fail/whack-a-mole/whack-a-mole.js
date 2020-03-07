// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log("Whack-a-Mole!")

randomNumber = nonDuplicateRandomNumberGenerator();
let moleCounter = 0;

function startGame() {
    clearMoleIfExist();
    const mole = createMole();
    mole.onclick = whackAMoleHandler;
    const row = randomNumber();
    const column = randomNumber();
    placeAMole(mole, row, column);
}

function placeAMole(mole, row, column) {
    const board = document.getElementById("gameBoard");
    const newPosition = board.rows[row].cells[column];

    newPosition.appendChild(mole);
}

function clearMoleIfExist() {
    let mole = document.getElementById("mole");

    if (mole) {
        mole.remove();
    }
}

function nonDuplicateRandomNumberGenerator() {
    let value;
    return function() {
        let newVaule;
        do {
            newValue = Math.floor(Math.random() * 5);
        } while (value === newValue);
        value = newValue;
        return value;
    }
}

function createMole() {
    const mole = document.createElement("img");
    mole.src = "mole.PNG";
    mole.setAttribute("id", "mole");
    return mole;
}

function createMoleSound() {
    let audio = new Audio();
    audio.src = "whack-audio.wav";
    audio.currentTime = 0;
    audio.play();
}

function whackAMoleHandler() {
    startGame();
    createMoleSound();
    moleCounter++;
    displayMoleCounter();
}

function displayMoleCounter() {
    document.getElementById("counter").innerHTML = `You've whacked ${moleCounter} so far!`;
}

function restartGame() {
    document.getElementById("counter").innerHTML = "";
    delayStart();
    moleCounter = 0;
}

function delayStart() {
    let countDown = 3;
    document.getElementById("timer");
    let delay = (setInterval(() => {
        document.getElementById("timer").innerHTML = `The game is about to start in ${countDown}`;
        if (countDown < 1) {
            clearTimeout(delay);
            startGame()
            document.getElementById("timer").innerHTML = "";
        }
        countDown--;
    }, 1000));
}