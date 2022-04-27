let container = document.querySelector('#container');
let track = "1fr ";
let clearButton = document.querySelector('.clear');
let newGridButton = document.querySelector('.newGrid');
let eraserButton = document.querySelector('.eraser');
let rainbowButton = document.querySelector('.rainbow');
let blackButton = document.querySelector('.black');
let boxes;

// default grid on page load

function createGrid(num){  
let divAmount = (num * num);

for (let i = 0; i < num; i++){
    container.style.gridTemplateColumns = track.repeat(num);
    container.style.gridTemplateRows = track.repeat(num);
    }
for (let j=0; j<divAmount; j++){
    let box = document.createElement('div');
    box.classList.add('box');
    container.append(box);
    }
    changeColour();
}
createGrid(16);

function changeColour(){
boxes = document.querySelectorAll(".box");
//looping through all of the boxes and adding an event listener to each one 
boxes.forEach(div => {
    div.addEventListener('mouseover', function(){
        div.classList.add('colour');
    });
});
}

//button functionality 

function eraser(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach(div => {
        div.addEventListener('mouseover', function(){
            div.classList.remove('colour');
            div.removeAttribute('style');
        });
    });
}

function clearGrid(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach(div => {
            div.classList.remove('colour');
            div.removeAttribute('style');
        });
    };

function newGrid(){    
let request = prompt('Select a size for your grid! (Max 100 squares): ');

if (request < 1 || request > 100 || !parseInt(request) == true) {
    alert('Please input a number between 1 and 100.');
}
else {
    removeSettings();
    createGrid(request);
}
}

// removes previous grid before calling new one in newGrid()

function removeSettings(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach(div => {
        div.parentNode.removeChild(div);
    });
}

function rainbow(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach((div, index) => {
        div.addEventListener('mouseover', function(){
            let rValue = Math.floor(Math.random() * 256)
            let gValue = Math.floor(Math.random() * 256)
            let bValue = Math.floor(Math.random() * 256)
        div.classList.remove('colour');
        div.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`    
    });
});
}

function black(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach((div, index) => {
        div.addEventListener('mouseover', function(){
            div.removeAttribute('style');
            changeColour();
        });
    });
    }        

//buttons 

clearButton.addEventListener('click', clearGrid);
newGridButton.addEventListener('click', newGrid);
eraserButton.addEventListener('click', eraser);
rainbowButton.addEventListener('click', rainbow);
blackButton.addEventListener('click', black);

//turn grid selection into slider
//clean grid boxes (maybe remove borders)
