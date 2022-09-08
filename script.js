const squares = document.querySelectorAll(".square");
let timeLeft = document.querySelector("#time-left");
let result = document.querySelector("#result");
let randomId;
let point = 0;
let timeDuration = 30;
timeLeft.innerHTML = 30;

function moveMole() {

    squares.forEach(square => square.classList.remove("mole"))
    randomId = Math.floor(Math.random() * 9);
    squares[randomId].classList.add('mole');
}
squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (square.id == randomId + 1) {
            point += 1;
            result.innerHTML = point;
        }


    })

})
let currentTimeId = setInterval(moveMole, 700);

function countDown() {

    timeDuration--;
    timeLeft.innerHTML = timeDuration;

    if (timeDuration == 0) {

        clearInterval(countDownId);
        clearInterval(currentTimeId);

        alert("Game Over! Your score is: " + result.innerHTML);
        point = 0;
        result.innerHTML = point;
        timeDuration = 30;
        timeLeft.innerHTML = "0";
        countDownId = setInterval(countDown, 1000);
        currentTimeId = setInterval(moveMole, 700);

    }

}

let countDownId = setInterval(countDown, 1000);