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
function addFlashcard() {
    const question = document.getElementById("newQuestion").value;
    const answer = document.getElementById("newAnswer").value;

    if (question !== "" && answer !== "") {
        flashcards.push({
            question: question,
            answer: answer
        });

        alert("Flashcard Added!");

        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";
    }
}

function editFlashcard() {
    const question = document.getElementById("newQuestion").value;
    const answer = document.getElementById("newAnswer").value;

    if (question !== "" && answer !== "") {
        flashcards[current].question = question;
        flashcards[current].answer = answer;

        showCard();

        alert("Flashcard Updated!");
    }
}

function deleteFlashcard() {

    if (flashcards.length > 1) {

        flashcards.splice(current, 1);

        current = 0;

        showCard();

        alert("Flashcard Deleted!");
    } else {

        alert("At least one flashcard is required.");
    }
        }
