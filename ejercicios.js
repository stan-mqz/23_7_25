//Ejercicio 1

let entrada = true
let edad = 15

let puedeEntrar = edad >= 13 && entrada ? 'Puedes entrar' : 'No puedes entrar'
console.log(puedeEntrar)

//Ejercicio 2
let edad2 = 70
let incapacitado = false

let tieneDescuento = edad >= 60 || incapacitado ? 'Tiene descuento' : 'No tiene descuento'

console.log(tieneDescuento)

//Ejercicio 3
let nota = 8
let recuperacion = true


let aprobo = nota >= 7 || recuperacion ? 'Si pasa' : 'No pasa'
console.log(aprobo)