// file script.js

const sentences = [
    "I am a programmer",
    "I am a designer",
    "I am a freelancer"
];

let currentSentenceIndex = 0;
let wordElement;
let word;

// Function to update the sentence
function updateSentence() {
    const sentenceElement = document.getElementById('sentence');
    const sentence = sentences[currentSentenceIndex];
    const words = sentence.split(" ");
    word = words[2]; // The word that needs to be gradually removed
    words[2] = `<span id="word">${word}</span>`;
    sentenceElement.innerHTML = words.join(" ");
    wordElement = document.getElementById('word');
}

// Function to remove letters from the word
function removeLetter() {
    if (word.length > 0) {
        word = word.slice(0, -1);
        wordElement.textContent = word;
    } else {
        // If the word is empty, move to the next sentence
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        updateSentence();
    }
}

// Update the sentence initially on page load
updateSentence();

// Remove a letter every 500 milliseconds
setInterval(removeLetter, 500);



let hideTimeout;

function showDiv() {
    clearTimeout(hideTimeout);
    document.getElementById('myDiv').style.display = 'block';
}

function hideDiv() {
    hideTimeout = setTimeout(function() {
        document.getElementById('myDiv').style.display = 'none';
    }, 200); // Delay to allow moving from link to div
}

document.getElementById('myLink').addEventListener('mouseenter', showDiv);
document.getElementById('myLink').addEventListener('mouseleave', hideDiv);
document.getElementById('myDiv').addEventListener('mouseenter', showDiv);
document.getElementById('myDiv').addEventListener('mouseleave', hideDiv);