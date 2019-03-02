// create an array of words
const computerWords = ['hockey', 'breakaway', 'hat trick']
// choose word randomly

let chosenNum = Math.floor(Math.random() * computerWords.length);
let chosenWord = computerWords[chosenNum];
let rightLetter = [];
let wrongLetter = [];
let underscore = [];
console.log(chosenWord);

let underscorePerLetter = _ => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push(`_`);
    }
    return underscore;
}
document.addEventListener("keypress", (event) => {
    let keyLetter = String.fromCharCode(event.keyCode);
    if (chosenWord.indexOf(keyLetter) > -1) {
        rightLetter.push(keyLetter);
        underscore[chosenWord.indexOf(keyLetter)] = keyLetter;
        if (underscore.join('') === chosenWord) {
            alert('You win')
        }
        console.log(rightLetter);
} else {
        wrongLetter.push(wrongLetter)
        console.log(wrongLetter)
    }
})

// 1:07:46 https://www.youtube.com/watch?v=f5BbzXgvi1o
