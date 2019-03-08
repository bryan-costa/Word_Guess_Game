// create an array of words
const computerWords = ['hockey', 'breakaway', 'hat trick']
// choose word randomly

let chosenNum = Math.floor(Math.random() * computerWords.length);
let chosenWord = computerWords[chosenNum];
let allowedGuesses = 13;
let rightLetter = [];
let wrongLetter = [];
let underscore = [];
let computerScore = 0
let playerScore = 0

let getAllIndexes = (rightLetter, keyLetter) => {
    for (i = 0; i === rightLetter; i++)
        if (rightLetter[i] === keyLetter)
            rightLetter.push(i);
    console.log(rightLetter)
}

const check = _ => {
    if (chosenWord === rightLetter) {
        playerScore += getElementById('.ps').innerHTML = playerScore
    } else if (chosenNum !== rightLetter && allowedGuesses === 0) {
        computerScore += getElementById('.ps').innerHTML = computerScore
    }
}


console.log(chosenWord);

// Adds the underscores at the beginning of the game
let underscorePerLetter = _ => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push(`_ `)
        document.getElementById("r2p").innerHTML = underscore.join("")
    }
}
document.addEventListener("keypress", (event) => {
    console.log(event)
    let keyLetter = (event.key);
    // Correct letter is pressed
    if (chosenWord.indexOf(keyLetter) != -1) {
        underscore[chosenWord.indexOf(keyLetter)] = keyLetter
        rightLetter.push(keyLetter);
        document.querySelector("#r2p").innerHTML = underscore.join("")


    } else {
        // Wrong letter is pressed

    wrongLetter[chosenWord.indexOf(keyLetter)] = keyLetter
    wrongLetter.push(keyLetter)
    document.getElementById("wl").innerHTML = wrongLetter.join("")
    }

console.log(wrongLetter)

})

underscorePerLetter()
// check()