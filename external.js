function blueStyle(){
    document.body.style.backgroundColor = 'blue';
}
const goldStyle = document.getElementById('gold-color');
goldStyle.onclick = goldColor;

function goldColor(){
    document.body.style.backgroundColor = 'gold';
}

const greenStyle = document.getElementById('green-color');
greenStyle.addEventListener('click', function greenStyle(){
    document.body.style.backgroundColor = 'green';
})

const redStyle = document.getElementById('red-color');
redStyle.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})

document.getElementById('yellow-color').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})