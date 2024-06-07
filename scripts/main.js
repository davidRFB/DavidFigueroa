/*
create a function that when click the change user then change the color of the h1 to red
*/
function changeColor() {
    document.querySelector('h1').style.color = 'red';
}

document.querySelector('button').addEventListener('click', changeColor);


