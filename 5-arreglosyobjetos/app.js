//arreglo en javascript vanilla

let bebidas = ['jugo', 'cafe', 'te'];

let bebidas2 = new Array('jugo', 'cafe', 'te');

//declaración de arreglos

let nombres = ['pablo', 'Juan', 'Tesasa'];

let vegetales = new Array('lechuga', 'tomate', 'pepino' )

console.log(nombres[0]);
console.log(vegetales[1]);

//mutacion
nombres[1] = 'Glenda';
console.log(nombres[1]);

//length tamaño

console.log(nombres.length);

console.log(nombres.push('Tuski'));

console.log(nombres[3]);
console.log(nombres);
/* ********************************* */
/* operaciones con arreglos */

//manejo de arreglos

let frutas = ['pera', 'manzana', 'nispero', 'durazno'];
console.log(frutas);

//recorrer arreglos

for(let i = 0; i<= frutas.length -1; i++){
    console.log(frutas[i]);
}

console.log(frutas);
frutas.forEach(function(elemento, indice, array){
 console.log(elemento, indice);

});

//elemento al final
console.log(frutas);
frutas.push('piña');
console.log(frutas);
//elemento al principio
frutas.unshift('fresa')
console.log(frutas);
//elimina el ultimo elemento
frutas.pop();
console.log(frutas);
//elimina el primer elemento
frutas.shift();
console.log(frutas);

//muestra el indice del elemento solicitado
let posicion = frutas.indexOf('manzana');
console.log(posicion);

//elimina elmento segun su indice(posicion, cuentos elementos a partir de esa posicion)

frutas.splice(1, 1)
console.log(frutas);


//arreglos con diferentes tipos

let persona1 = ['Pedro', 'Lopez', 35, '3115877', 1.85 ];
console.log(persona1);


//objetos literales

var persona = {
   nombre: 'Kath',
   apellido: 'Bonilla',
   comida:['Italiana', 'postres'],
   trabajo: 'Antropóloga',
   casado: true

};
console.log(persona);
//acceder a propiedades del objeto
console.log(persona.comida);
console.log(persona['trabajo']);

//mutar

persona.casado= false;
console.log(persona.casado);

/*Objetos con sintexis Objetc*/

var persona3 = new Object();

persona3.nombre = 'Ana';
persona3.apellido = 'Juanas';
persona3 ['empleo'] = 'Web developer';
console.log(persona3);