const container = document.querySelector('#container');
let track = "1fr ";
let clearButton = document.querySelector('.clear');
let boxes;

// default grid on page load

function createGrid(num){  
let divAmount = (num * num);

for (let i = 0; i < num; i++){
    container.style.display = 'grid';
    container.style.gridTemplateColumns = track.repeat(num);
    container.style.gridTemplateRows = track.repeat(num);
    }
for (let j=0; j<divAmount; j++){
    let box = document.createElement('div');
    box.classList.add('box');
    container.append(box);
    }
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
changeColour();


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




clearButton.addEventListener('click', clearGrid);



