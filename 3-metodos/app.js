//objetos y metodos
var persona ={
   //propiedades
    nombre : 'Tsuki',
    apellido: 'López',
    gusto: ['pelotas', 'parque', 'galletas'],
    trabajo: 'cuidar casa',
    coqueta: true, 
    yearBirth: 2018,

    //Metodos
    /*calcularEdad: function(yearBirth){
        return 2022 - yearBirth;*/

        //this

  calcularEdad: function(){
    this.edad = 2022 - this.yearBirth;
  }


};

persona.calcularEdad();
console.log(persona);

/*var edad = persona.calcularEdad(2018);
console.log(edad);*/
