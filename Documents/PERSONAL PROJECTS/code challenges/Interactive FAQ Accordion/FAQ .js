const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        // Close all other answers
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("active");
                item.nextElementSibling.style.display = "none";
                item.querySelector(".icon").textContent = "+";
            }
        });

        // Toggle current answer
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
            question.classList.remove("active");
        } else {
            answer.style.display = "block";
            icon.textContent = "-";
            question.classList.add("active");
        }
    });
});