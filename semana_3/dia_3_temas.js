// Repaso de arreglos
let arreglo = [1, 5, 9, 2]
let indice = 1
arreglo[indice] // 5
indice = 3
arreglo[indice] // 2
// Agregar elemento al arreglo
arreglo.push(9)

// Repaso de funciones
function suma(numero_1, numero_2) {
    return numero_1 + numero_2
}
let x = suma(1, 2) // 3

let texto_1 = 'Este es un texto'
let texto_2 = 'Este es otro texto'

// Negación en condicionales
if(texto_1 !== texto_2) {
  // si se cumple
} else {
  // si no se cumple
}

// Ciclos
while(condicion) {
    // Codigo
}

let i = 0
while(i < 5) {
    console.log("Voy en " + i)
    i = i + 1
    // i += 1
}

do {
  // Igual que el while pero
  // se ejecuta al menos una vez
} while(i < 5)

for(var i = 0; i < 10; i += 1) {
  console.log('Voy en ' + i)
}

let a = [1, 2, 3, 4]
a.length // 4, contiene la longitud

for(var i = 0; i < a.length; i += 1) {
    console.log(a[i])
}