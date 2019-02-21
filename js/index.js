var btn_calcular = document.querySelector('#calcular');
var btn_eliminar = document.querySelector('#eliminar');
var inputX = document.querySelector('#x');
var inputX0 = document.querySelector('#x0');
var inputFX0 = document.querySelector('#fx0');
var inputX1 = document.querySelector('#x1');
var inputFX1 = document.querySelector('#fx1') ;
var inputX2 = document.querySelector('#x2');
var inputFX2 = document.querySelector('#fx2');
var form = document.querySelector('#form');

btn_calcular.addEventListener('click',calcular); 
btn_eliminar.addEventListener('click',eliminar);

function calcular(){
    let x = Number(inputX.value);
    let x0 = Number(inputX0.value);
    let x1 = Number(inputX1.value);
    let x2 = Number(inputX2.value);

    let fx0 = Number(inputFX0.value);
    let fx1 = Number(inputFX1.value);
    let fx2 = Number(inputFX2.value);
    

    let b0 = fx0;
    let b1 = (fx1 - fx0) / (x1-x0);
    let b2 = ((fx2-fx0) / (x2-x0)) - b1;

    let res = b0 + b1 * (x1-x0) + b2 * (x-x0)*(x-x1);
    console.log(res);
}
function eliminar(){

    form.reset();
}