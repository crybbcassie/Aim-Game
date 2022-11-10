let startBtn = document.querySelector('#start');
let screens = document.querySelectorAll('.screen');
let timeList = document.querySelector('#time-list');
let time = 0;
let timeEl = document.querySelector('#time');
let board = document.querySelector('#board');
let score = 0;
let colors = ["#67A3D9", "#C8E7F5", "#F6D2E0", "#F8B7CD"];

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add("up");
        startGame();
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++;

        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(value);
}

function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time;
        if (current < 10) {
        current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    board.innerHTML = `<h1>Total score: <span class='primary'>${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide')
}

function createRandomCircle() {
    let circle = document.createElement('div');
    let size = getRandomNumber(10, 60);
    let {width, height} = board.getBoundingClientRect()
    let x = getRandomNumber(0, width - size);
    let y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.bottom = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.right = `${x}px`;
    circle.style.background = getRandomColor();
    circle.style.boxShadow = `0 0 2px #fff, 0 0 10px #fff`;

    board.append(circle);


}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  let i = Math.floor(Math.random() * colors.length);
  return colors[i];
}
