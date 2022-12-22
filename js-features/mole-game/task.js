let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wings = parseInt(deadMole.textContent);
let losts = parseInt(lostMole.textContent);

function checkGame(deadMole, lostMole) {
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wings += 1;
            deadMole.textContent = wings;
        } else {
            losts += 1;
            lostMole.textContent = losts;
        };
        checkGame(wings, losts);
    };
};







// (() => {
//     const inputs = document.querySelectorAll('div > .hole');
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].addEventListener("click", myFunction);
//     }
//     function myFunction() {
//         const dead = document.getElementById("dead");
//         const lost = document.getElementById("lost");
//         if (dead.textContent <= 8 & lost.textContent <= 3) {
//             if (this.className == "hole hole_has-mole") {
//                 dead.textContent++ + 1;
//             } else {
//                 lost.textContent++ + 1;
//             }
//         } else 
//         if (dead.textContent >= 8) {
//             alert('Вы выиграли');
//             dead.textContent = 0;
//             lost.textContent = 0;
//         } else if (lost.textContent >= 3){
//             alert('Вы проиграли');
//             dead.textContent = 0;
//             lost.textContent = 0;
//         }
//     }
//     })();
