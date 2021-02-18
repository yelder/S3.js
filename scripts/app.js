//Exercici1
console.log('Hola Mundo')

//Exercici2
alert('Me llamo Yelder Da Silva')

//Exercici3
let name = 'Yelder'
let lastName = 'Da Silva'
console.log(name, lastName)

//Exercici4
let num1 = 4
let num2 = 6
let suma = num1 + num2
console.log('La suma de', num1, 'y', num2, 'es', suma)

//Exercici5
let nota_examen
nota_examen = 4
if (nota_examen > 5) {
  alert('Ha Aprobado')
} else {
  alert('Ohh has suspendido el examen con un ' + nota_examen)
}

//Exercici6
var texto = 'Tinc un cotxe de color verd'
console.log(texto)
texto1 = texto.replace('verd', 'bleu')
texto2 = texto1.replace(/['o']/gi, 'u')
console.log(texto2)

//Exercici7
let palabras = ['taula', 'cadira', 'ordinador', 'libreta']

for (let i = 0; i < palabras.length; i++) {
  const element = palabras[i]
  console.log("L'objecte " + element + ' està a la posició ' + i)
}

//Exercici8
function calculadora(operador, valor1, valor2) {
  switch (operador) {
    case 'suma':
      return valor1 + valor2
    case 'resta':
      return valor1 - valor2
    case 'multiplicacion':
      return valor1 * valor2
    case 'division':
      return valor1 / valor2
      break

    default:
      break
  }
}
var resultat = calculadora('resta', 40, 20)
console.log(resultat)
