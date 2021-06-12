var nombre = prompt("Ingrese el nombre del alumno/a")
console.log("El nombre ingresado es : " + nombre)

var nota_1 = prompt("Ingrese la primer nota del alumno/a " + nombre)
var nota_2 = prompt("Ingrese la segunda nota del alumno/a " + nombre)
var nota_3 = prompt("Ingrese la tercer nota del alumno/a " + nombre)


if(validar_nota(nota_1) && validar_nota(nota_2) && validar_nota(nota_3)){
    
    alert("El promedio del alumno/a : " + nombre + " es = " + promedio())
} else{
    alert("Ingreso un valor incorrecto")
}


function validar_nota(nota){
    var nota_parseada = parseFloat(nota)
    if(nota_parseada > 0 && nota_parseada <=10){
        return true
    } else {
        return false
    }
}

function promedio(){
    var suma_notas = parseFloat(nota_1) + parseFloat(nota_2) + parseFloat(nota_3)
    return suma_notas / 3
}