var btn_calcular = document.querySelector('#calcular');
var btn_eliminar = document.querySelector('#eliminar');
var inputX = document.querySelector('#x');
var inputFx = document.querySelector('#fx');
var inputX0 = document.querySelector('#x0');
var inputFX0 = document.querySelector('#fx0');
var inputX1 = document.querySelector('#x1');
var inputFX1 = document.querySelector('#fx1') ;
var inputX2 = document.querySelector('#x2');
var inputFX2 = document.querySelector('#fx2');
var form = document.querySelector('#form');
var resultado = document.querySelector('#resultado');
var error = document.querySelector('#error');
var porcentual = document.querySelector('#porcentual');

btn_calcular.addEventListener('click',calcular); 
btn_eliminar.addEventListener('click',eliminar);

function calcular(){
    let x = Number(inputX.value);
    let x0 = Number(inputX0.value);
    let x1 = Number(inputX1.value);
    let x2 = Number(inputX2.value);

    let fx = Number(inputFx.value);
    let fx0 = Number(inputFX0.value);
    let fx1 = Number(inputFX1.value);
    let fx2 = Number(inputFX2.value);
    

    let b0 = fx0;
    let b1 = (fx1 - fx0) / (x1-x0);
    let b2 = ((fx2-fx0) / (x2-x0)) - b1;

    let res = b0 + b1 * (x1-x0) + b2 * (x-x0)*(x-x1);
    let res2 = fx - res;
    let res3 = (res2/fx) * 100;

    resultado.innerHTML = `Tu resultado es de: ${res}`;
    error.innerHTML = `El error aproximado es de: ${res2}`;
    porcentual.innerHTML = `El porcentaje es de: ${res3}%`;

}
function eliminar(){

    form.reset();
}