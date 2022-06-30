let hide = document.getElementById('hide');
let hidden = document.getElementById('hidden');

hide.addEventListener('click', hidefunction);

function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

let colorarr = ["red","blue","orange","green"];

function hidefunction(){
    hidden.style.color = getRandomItem(colorarr);
}

// console.log(hide);