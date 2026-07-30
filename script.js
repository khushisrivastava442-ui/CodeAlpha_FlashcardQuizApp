const flashcards = [
    {
        question: "What is Java?",
        answer: "Java is a programming language."
    },
    {
        question: "What is HTML?",
        answer: "HTML is used to create web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used for styling."
    }
];

let current = 0;

function showCard() {
    document.getElementById("question").innerText =
        flashcards[current].question;

    document.getElementById("answer").innerText =
        flashcards[current].answer;

    document.getElementById("answer").style.display = "none";
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function nextCard() {
    current = (current + 1) % flashcards.length;
    showCard();
}

function previousCard() {
    current = (current - 1 + flashcards.length) % flashcards.length;
    showCard();
}

showCard();
