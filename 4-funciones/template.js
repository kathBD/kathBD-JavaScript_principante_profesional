//Plantillas de cadena

let nombre = 'Tsuki';

console.log('El nombre es: ' + nombre);
console.log(`El nombre es: ${nombre}`);

//operaciones

let a =5;
let b = 10;

console.log(`La suma es: ${a+b}`);

//ej4

let evaluarPorcentaje = function(nombre, positivas, negativas){

  let porcentajePos =   positivas/100 * 100;
  let porcentajeNeg =negativas/100 * 100;

   let score = ' ';
   
    
 if(porcentajePos > 90){
   // return nombre  + ' scrore A';
   score = 'A';
 }else if(porcentajePos >= 70){
    //return nombre  + ' scrore B';
    score =' B';
 }else if(porcentajePos >= 45 ){
    //return nombre  + ' scrore c';
    score  = 'c';

}else{
   // return nombre  + ' scrore D';
   score = 'D';
}
return `${nombre} tiene el score ${score} (Positivas: ${porcentajePos}% , negativas: ${porcentajeNeg}%)`;
}

let resultado = evaluarPorcentaje('Juan', 80, 20)


console.log(resultado);

