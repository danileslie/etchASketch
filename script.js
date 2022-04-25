const container = document.querySelector('#container');
let track = "1fr ";

function createGrid(num){  
    let divAmount = (num * num);

for (let i = 0; i < num; i++){
    container.style.display = 'grid';
    container.style.gridTemplateColumns = track.repeat(num);
    container.style.gridTemplateRows = track.repeat(num);
    }
    

for (let j=0; j<divAmount; j++){
    let box = document.createElement('div');
    container.append(box);
    }
}
createGrid(20);

// look up different between appendChild and documentFragment, possibly swap out