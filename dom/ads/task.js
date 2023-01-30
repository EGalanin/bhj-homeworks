const rotatorArray = Array.from(document.querySelectorAll('.rotator__case'));
let currentRotator = 0;
let delay = 1000;
setInterval(addChange, delay);

function getDataSet() {
    let dataSet = rotatorArray[currentRotator].dataset;
    rotatorArray[currentRotator].style.color = dataSet.color;
    delay = rotatorArray[currentRotator].style.speed = dataSet.speed;
}

function addChange() {
    rotatorArray[currentRotator].classList.remove('rotator__case_active');
    currentRotator++;

    if (currentRotator >= rotatorArray.length) {
        currentRotator = 0;
        rotatorArray[currentRotator].classList.add('rotator__case_active');
        getDataSet();
    }
    else {
        rotatorArray[currentRotator].classList.add('rotator__case_active');
        getDataSet();
    }
    setTimeout(addChange, delay);

}
  


