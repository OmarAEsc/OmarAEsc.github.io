const app= document.getElementById('typewriter');

const typewriter=new typewriter(app, {
    loop:true,
    delay:75
})

typewriter
.typeString('Nazareno')
.pauseFor(200)
.start();


function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }





  function checkAnswers2() {
    let correctAnswers2 = ["am playing", "are playing", "is playing", "is playing", "is playing", "are playing", "is playing", "are playing"];
    let userAnswers2 = [];
    let exercises2 = document.querySelectorAll('.exercise2');

    exercises2.forEach((exercise2, index) => {
        let selectedAnswer2 = exercise2.querySelector('input[type="radio"]:checked');
        if (selectedAnswer2) {
            userAnswers2.push(selectedAnswer2.value);
            if (selectedAnswer2.value === correctAnswers2[index]) {
                exercise2.classList.add('correct2');
                exercise2.classList.remove('incorrect2');
            } else {
                exercise2.classList.add('incorrect2');
                exercise2.classList.remove('correct2');
            }
        } else {
            userAnswers2.push(null);
            exercise2.classList.remove('correct2');
            exercise2.classList.add('incorrect2');
        }
    });

    let score2 = 0;
    userAnswers2.forEach((answer2, index) => {
        if (answer2 === correctAnswers2[index]) {
            score2++;
        }
    });

    document.getElementById('result2').innerText = `You got ${score2} out of ${correctAnswers2.length} correct.`;
}

