/*************** **sentencias logicas*/

let nombre = 'Tsuki'
let estadoCivil = 'soltera'

//bloque entre llaves

if (estadoCivil === 'casado') {
  console.log(nombre + ' esta casado')
} else {
  console.log(nombre + ' Esta soltero ')
}

//operador ternario

let nombre2 = 'Alejandra'
let edad = 23

edad >= 18
  ? console.log(nombre2 + ' Es mayor de edad ')
  : console.log(nombre2 + ' Es menor de edad ')

//switch

let mes = 8

switch (mes) {
  case 1:
    console.log('Enero')
    break

  case 2:
    console.log('febrero')
    break;
  case 3:
    console.log('Marzo')
    break;
    default:
        console.log('Mes no considerado');
}
//repetitivas o bucles
/*for(variable; condicion; contador){
//insrucion
}*/

//while
/***************/
/*

variable
while(condicion)
instruccion
contador*/
let i = 1;
while (i<=10){
    console.log(i);
    i++
}

/*do while*/

let j = 12;
do{
console.log(j);

}while(j<=10);


