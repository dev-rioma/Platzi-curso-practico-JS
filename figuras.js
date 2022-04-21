// Codigo del CUADRADO
console.group("CUADRADO 🟦")
const ladoCuadrado = 5

console.log("Los lados del Cuadrado miden: " + ladoCuadrado + "cm")
console.log(`Los lados del cuadrador miden: ${ladoCuadrado} cm`)

const perimetroCuadrado = ladoCuadrado * 4

console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log(`El area del cuadrado es ${areaCuadrado} cm^2`)
console.groupEnd()

// Codigo del TRIANGULO
console.group("TRIANGULO 🔺")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log(
  `Los lados del triangulo miden: 
  ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`
)

console.log(`La altura del triangulo es de ${alturaTriangulo} cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo

console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.log(`El area del triangulo es ${areaTriangulo} cm^2`)
console.groupEnd()

//Codigo del CIRCULO
console.group("CIRCULO 🟡")

// Radio
const radioCirculo = 4
console.log(`El radio del circulo es: ${radioCirculo} cm`)

// Diametro
const diametroCirculo = radioCirculo * 2
console.log(`El diametro del circulo es: ${diametroCirculo} cm`)

// PI
// const PI = 3.1415
const PI = Math.PI
console.log(`El vaor de PI es: ${PI}`)

// Circunferencia
const perimetroCirculo = diametroCirculo*PI
console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`)

// Area
const areaCirculo = PI * (radioCirculo * radioCirculo)
console.log(`El area del circulo es: ${areaCirculo} cm^2`)
console.groupEnd()

