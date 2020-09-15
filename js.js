const correctAnswers = ["B", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault(); // to stop refreshing page
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  //Cheking answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  //--- go to top page
  window.scrollTo(0, 0);
  // --- remove display none
  result.classList.remove("d-none");
  //--- counting from 0% to the score%
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window.setTimeout(() => {
//     alert('Hello there.');
// }, 3000);

let i = 0;
const timer = setInterval(() => {
  //console.log("hello");
  i++;
  if (i === 50) {
    clearInterval(timer);
  }
}, 10);
