"use strict"
//Definimos variables a utilizar
let primerNumero , segundoNumero , tipoOperacion , resultado;

//Definimos una función para limpiar la pantalla
function fnLimpiarPantalla(){

    display.value = " ";

}

//Definimos una funcion para marcar los numeros en la pantalla desde los botones

function fnMarcarNumero(n){  
    if (n === '.' &&display.value.includes('.')) {
        return;
    }
    display.value = display.value + n;
}
/*
Esta línea de código es una condición if que verifica si el carácter n es igual a un punto (.) y si el valor actual en la pantalla (display.value) ya contiene un punto. Si ambas condiciones son verdaderas, se ejecuta el código dentro de las llaves {}.
esta condición if verifica si se está intentando agregar un segundo punto a la pantalla y, de ser así, evita que se agregue.
*/ 

/*
function fnMarcarNumero(n){
    display.value = display.value + n;
}
*/

//Definimos una funcion pa5ra recibir la operacion
function fnOperacion(op){

    primerNumero = Number(display.value);
    fnLimpiarPantalla();
    tipoOperacion = Number(op);

}

//Definimos la funcion para el boton de igual

function fnOperar(){

    segundoNumero = Number(display.value);
    fnLimpiarPantalla();
    switch(tipoOperacion){
        case 1:
            resultado = primerNumero + segundoNumero;
        break;
        case 2:
            resultado = primerNumero - segundoNumero;
        break;
        case 3:
            resultado = primerNumero * segundoNumero;
        break;
        case 4:
            resultado = primerNumero / segundoNumero;
        break;       
        case 5:
            resultado = Math.pow(primerNumero , segundoNumero);
        break;           
    }
    display.value = resultado.toFixed(2);
}

//Definimos una funcion para el boton porcentaje
function fnPorcentaje(){

    segundoNumero =Number(display.value);
    fnLimpiarPantalla();
    resultado = primerNumero * (segundoNumero / 100);
    display.value = resultado.toFixed(2);

}


//Definimos una fraccion para cambiar de signo
function fnCambiarSigno(){

    display.value = Number(display.value) * -1;

}