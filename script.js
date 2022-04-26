let container = document.querySelector('#container');
let track = "1fr ";
let clearButton = document.querySelector('.clear');
let newGridButton = document.querySelector('.newGrid');
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

function eraserMode(){
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
removeSettings();
createGrid(request);
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


