function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

function changeBackgroundColor() {
    intervalId = setInterval(function() {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopChangeBackgroundColor(){
    clearInterval(intervalId);
}
document.querySelector('button[data-start]').addEventListener('click', function() {
    this.disabled = true;
    document.querySelector('button[data-stop]').disabled = false;
    changeBackgroundColor();
});

document.querySelector('button[data-stop]').addEventListener('click', function() {
    this.disabled = true;
    document.querySelector('button[data-start]').disabled = false;
    stopChangeBackgroundColor();
}); 