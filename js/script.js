document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const words = [" Engineer", " Analytics Engineer", " Cloud Trainee"];
    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (deleting) {
            textElement.textContent = "Data" + currentWord.substring(0, letterIndex--);
        } else {
            textElement.textContent = "Data" + currentWord.substring(0, letterIndex++);
        }

        let speed = deleting ? 50 : 100;

        if (!deleting && letterIndex === currentWord.length + 1) {
            speed = 1000;
            deleting = true;
        } else if (deleting && letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
