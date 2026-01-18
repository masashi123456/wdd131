let selectElement = document.getElementById('mode');
let image = document.querySelector('#byui_img');

selectElement.addEventListener('change', changeColor);

function changeColor(){
    let current = selectElement.value;
    if(current === 'light'){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else{
        document.body.style.backgroundColor = "#272727c5";
        document.body.style.color = "white";
        image.src = "images/byui-dark.png";
    }
}