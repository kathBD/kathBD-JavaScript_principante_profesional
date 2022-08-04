function bienvenido(){
    console.log('Hola a la sección de Funciones');
}
//invocar
bienvenido();

//partes de una funcion

//entrada(argumento), codigo, salida(return)

function cuadraNumero(){

}

cuadraNumero();

//conversor de farh a celsius

function conversorFaHaCels(gradoFah){

    let celsius = (gradoFah - 32) * 5/9;
    return celsius;

}

let temperatura1 = conversorFaHaCels(32);
let temperatura2 = conversorFaHaCels(68);
console.log(temperatura1);
console.log(temperatura2);



//retornar edad


function calculoEdad(yearNacimiento){
 
    return 2022 - yearNacimiento;

}

let edad1 = calculoEdad(1990);
let edad2 = calculoEdad(1987);
let edad3 = calculoEdad(1978);
console.log(edad1);
console.log(edad2);
console.log(edad3);

//ejer3

function edadJubilacion(age, nombre){

    return 65 - age + nombre;
}

let Juanjubilacion = edadJubilacion(19, ' Juan');

console.log("Le faltan " + Juanjubilacion  + " años");

