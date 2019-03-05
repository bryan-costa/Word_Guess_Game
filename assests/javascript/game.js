// create an array of words
const computerWords = ['hockey', 'breakaway', 'hat trick']
// choose word randomly

let chosenNum = Math.floor(Math.random() * computerWords.length);
let chosenWord = computerWords[chosenNum];
let allowedGuesses = 13;
let rightLetter = [];
let wrongLetter = [];
let underscore = [];
// console.log(rightLetter);
console.log(chosenWord);

// Adds the underscores at the beginning of the game
let underscorePerLetter = _ => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push(`_ `)
        document.getElementById("r2p").innerHTML = underscore.join("")
        // console.log(underscore)
    }
}
document.addEventListener("keypress", (event) => {
    let keyLetter = String.fromCharCode(event.keyCode);
    // Correct letter is pressed
    if (chosenWord.indexOf(keyLetter) != -1) {
        rightLetter.push(keyLetter);
        underscore[chosenWord.indexOf(keyLetter)] = keyLetter;
        document.getElementById("r2p").innerHTML = underscore.join("")
    } else {
        // Wrong letter is pressed
        wrongLetter.push(keyLetter)
        wrongLetter[chosenWord.indexOf(keyLetter)] = keyLetter;
        document.getElementById("wl").innerHTML = wrongLetter.join("")
        console.log(wrongLetter)
    }
    })
underscorePerLetter()
