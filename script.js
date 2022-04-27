let container = document.querySelector('#container');
let track = "1fr ";
let clearButton = document.querySelector('.clear');
let newGridButton = document.querySelector('.newGrid');
let eraserButton = document.querySelector('.eraser');
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


//section for button functionality 

function eraser(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach(div => {
        div.addEventListener('mouseover', function(){
            div.classList.remove('colour');
        });
    });
}

function clearGrid(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach(div => {
            div.classList.remove('colour');
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

//buttons 

clearButton.addEventListener('click', clearGrid);
newGridButton.addEventListener('click', newGrid);
eraserButton.addEventListener('click', eraser);

//make rainbow tiles work (with button for toggle)
//turn grid selection into slider
//clean grid boxes (maybe remove borders)
