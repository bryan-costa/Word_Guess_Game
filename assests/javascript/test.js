const chosenWord = ["choose"];
let underscore = [];
let rightLetter = [];

document.addEventListener("keypress", (event) => {
    let keyLetter = String.fromCharCode(event.keyCode);
    for (i = 0; i < chosenWord.length; i++) {
    // chosenWord.indexOf(keyLetter) != -1
    // underscore[chosenWord.indexOf(keyLetter)] = keyLetter
    rightLetter.push(keyLetter);
    // underscore.join("")
    console.log(keyLetter)
    }
})
