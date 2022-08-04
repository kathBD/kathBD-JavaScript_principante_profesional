//funciones como expresiones


let prueba = function(){
  return  'mensaje de prueba'
}

console.log(prueba());


let prueba2 = function(nombre){
    return  'Hola' + nombre
  }
  
  console.log(prueba2(' Tsuki'));

//sin definir - undefined

console.log(prueba2());


  //argumentos nulos -null

  let a;
  a= null;

  let valorNulo = function(a){
   return a;

  }

console.log(valorNulo(a));

//argumentos por defecto

let sumar = function(a, b, c=2){
    return a + b + c;
}

console.log(sumar(10 , 4));

console.log(sumar(10 , 4, 10));
