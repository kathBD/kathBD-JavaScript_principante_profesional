//Examinando DOM
  //console.dir(document);
//console.log(document.URL) Muestra la ruta
//console.log(document.title) //Muestra el titulo

/*cambio de titulo de manera dinamica
document.title = 'prueba' //aparece en pestaña prueba*/

/*console.log(document.head) 
console.log(document.body) 
console.log(document.all) 
console.log(document.all[10]) 
console.log(document.forms) 
console.log(document.images) 
console.log(document.links) */


//getElementById - un solo eleemnto ID

/*console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
console.log(headerTitle);
//headerTitle.textContent = 'Hola';
//headerTitle.innerHTML= 'Adios';
//headerTitle.innerHTML = '<h3>Prueba titulo</h3>'*/


//getElementsByClassName (incorpora varios eleemntos)CLASE

/*let items = document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent = 'prueba'; //cambia el items 1*/


/******getElementsByTagName****/
/*let items = document.getElementsByTagName('li');
items[2].textContent = 'prueba 02'; */


/********querySelector ********************* *primer elemento*/

/*let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #5EAEF2';

let input = document.querySelector('input')
input.value = 'escribe';
let submit = document.querySelector('input[type="submit"]');
submit.value= "Enviar";

let item = document.querySelector('.list-group-item');

//solo cambia al primero
item.style.color = 'blue';


/********querySelectorAll ********************* */

/*var items = document.querySelectorAll('.list-group-item')
items[2].style.color='red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);

titulos[0].textContent = 'Prueba'

//solo cambiar los impares de la lista

let impar = document.querySelectorAll('li:nth-child(odd)');
let par = document.querySelectorAll('li:nth-child(even)');
for(let i =0; i<impar.length; i++){
impar[i].style.backgroundColor = '#ccc'
 par[i].style.backgroundColor = '#f4f4f4'
};
*/
/************Padres ParentNOde */
/*let itemList = document.querySelector('#items');
console.log(itemList.parentNode);

let main = itemList.parentNode;

main.style.backgroundColor = '#f4f4f4';
console.log(main.parentNode)*/

//ParentElement

/*let itemList = document.querySelector('#items');
console.log(itemList.parentElement);

let main = itemList.parentElement;

main.style.backgroundColor = '#f4f4f4';
console.log(main.parentElement)*/


/***********NODOS HIJOS  */
/*let itemsList = document.querySelector('#items');
//children
console.log(itemsList.childNodes);
console.log(itemsList.children);

//firstChild

//console.log(itemsList.firstChild)
console.log(itemsList.firstElementChild.firstChild);

itemsList.firstElementChild.textContent = 'prueba'

//lastChild

console.log(itemsList.lastElementChild);

itemsList.lastElementChild.textContent = 'prueba'*/

/***********Elementos hermanos  -en la misma linea <li></li>*/



/*let itemsList = document.querySelector('#items');

//previousSibling

console.log(itemsList.previousSibling)

//previusElementSibling

console.log(itemsList.previousElementSibling);

//NextSibling

console.log(itemsList.nextSibling);

//NextElementSibling

console.log(itemsList.previousElementSibling);*/

//************Crear eleemntos*************/
//TagName

/*let nuevoDiv = document.createElement('div');
//console.log(nuevoDiv)
nuevoDiv.className = 'new';
nuevoDiv.id = 'div.hola';
nuevoDiv.setAttribute('title', 'Hola mundo');

console.log(nuevoDiv);

//createTextNode

let nuevoNodoText = document.createTextNode('Hola Mundo');

nuevoDiv.appendChild(nuevoNodoText);

console.log(nuevoDiv);

//agregar a sitio web

let contenedor = document.querySelector('header .container');
console.log(contenedor);

let h1 = document.querySelector('h1');
console.log(h1);
contenedor.insertBefore(nuevoDiv, h1);*/

//crear eventos

/*function hacerClick(){
  console.log('Usted hizo click...');
}
*/
/*document.getElementById('bnt').addEventListener('click', function(){

  console.log('click 2');
});


document.getElementById('bnt').addEventListener('click', hacerClick);

function hacerClick(){
  console.log('Usted hizo click...');
}


document.getElementById('bnt').addEventListener('click', hacerClick2);
function hacerClick2(){
  document.getElementById('header-title').textContent = 'texto cambiado';
  
}*/

//cambiar diseño -agregar elemento

let formulario = document.getElementById('formAgregar');
let lista = document.getElementById('items');
let filtro = document.getElementById('filtro');

//agregar evento submit

formulario.addEventListener('submit', agregarItem);

//evento click lista

 //este evento es cancelable sin detener el evento

 lista.addEventListener('click', eliminarItem);

 //evento teclado buscar items

 filtro.addEventListener('keyup', filtrarLista);

 //funcion para agregar item a la lista

function agregarItem(e){

   e.preventDefault();

   let newItem = document.getElementById('item').value;

   let li = document.createElement('li');

   li.className = 'list-group-item';

   li.appendChild(document.createTextNode(newItem));

   let btn = document.createElement('button');

   btn.className = 'btn btn-danger btn-sm float-right eliminar';
   btn.appendChild(document.createTextNode('X'));

   li.appendChild(btn);

   lista.appendChild(li);


   console.log(li);

}

//funcion para agregar item a la lista

function eliminarItem(e){

if(e.target.classList.contains('eliminar')){
 if(confirm('¿seguro desea eliminar Item')){
  let li = e.target.parentElement;
  lista.removeChild(li);

 }
 
}

}

//buscar items funcion filtro

function filtrarLista(e){

  let texto =e.target.value.toLowerCase();

let items = lista.getElementsByTagName('li')

Array.from(items).forEach(function(item){

  let itemNombre = item.firstChild.textContent;

  if(itemNombre.toLocaleLowerCase().indexOf(texto) != -1){

    item.style.display = 'block';

  }else{
    item.style.display = 'none';
  }
});
}


