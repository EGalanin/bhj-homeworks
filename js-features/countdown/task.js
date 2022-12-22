const out = document.getElementById("timer");


const addText = function() {
    out.textContent -= 1;
    if (out.textContent <= 0) {
        alert("Вы выиграли!!!");
        clearInterval(timerId);
    }
}


const timerId = setInterval(addText, 1000); 

