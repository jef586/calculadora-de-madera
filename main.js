


//calcula la madera
function calculomadera(){
// variables de las opciones de maderas
let A1 = document.getElementById("A1");
let A2 = document.getElementById("A2");
let A3 = document.getElementById("A3");
let A4 = document.getElementById("A4");
let A5 = document.getElementById("A5");
// variables de las dimensiones de la madera
let C = document.getElementById("ancho").value;
let B = document.getElementById("largo").value;
let D = document.getElementById("espesor").value;
let desperdicio = 1 ; // desperdicio siempre tiene que ir en 1 cuando no se le añade un valor
// variables de la resina
let E = document.getElementById("anchoderio").value;
let F = document.getElementById("espesor-resina").value;
//pasar de cm a metro
let B2 = B*100;
//RESTAR ANCHO DE RIO
let pulgada = 2.5;
let C2 = (C-E)/ pulgada ;
//calculo de las dimensiones de la madera
let dimen = B * C2 * D * desperdicio ;

////////////////////////////
let dimension = dimen.toFixed(2);
console.log(dimension);
////////////////////////////////


let desperdicio2 = 1;//desperdicio siempre debe ser 1 cuando no se le añade otro valor

// calculo de la cantidad de resina
//1000 para pasar de cm cúbicos a Litro
let calresina = (E * F * B2 * desperdicio2)/1000 ; 

//////////////////////////////
let calculoresina = calresina.toFixed(2);
console.log (calculoresina);
///////////////////////////////

//imprime en el html el valor de los calculos
document.getElementById("cantidadmadera").innerHTML = dimension; 
document.getElementById("cantidadresina").innerHTML = calculoresina; 


// seleciona el tipo de madera
let e = document.getElementById("selectmadera");
let preciomadera = e.options[e.selectedIndex].value ;

// calculos de los totales
let totalmadera = dimension * preciomadera ; 
let precioresina = 1000; // este se debe modificar!!
let totalresina = calculoresina * precioresina ;
let total = (totalmadera + totalresina).toFixed(2) ; 

//imprime los totales 
document.getElementById("totalmadera").innerHTML = totalmadera;
document.getElementById("totalresina").innerHTML = totalresina ;
document.getElementById("total").innerHTML = total ;





return e;



}



function limpiarFormulario() {
document.getElementById("miForm").reset();
    
  }

function ocultar(){
document.getElementById('costos').style.display = 'none';
}

   

function cambios() {
  var x = document.getElementById("costos");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
function cambios2() {
  var x = document.getElementById("totales");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}


