// Codigo del CUADRADO
console.group("Figuras")
  console.group("CUADRADO 🟦")
  // const ladoCuadrado = 5

  // console.log("Los lados del Cuadrado miden: " + ladoCuadrado + "cm")
  // console.log(`Los lados del cuadrador miden: ${ladoCuadrado} cm`)

  function perimetroCuadrado (lado) {
    return lado * 4
  } 

  // console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`)

  function areaCuadrado (lado) {
    return lado * lado
  } 

  // console.log(`El area del cuadrado es ${areaCuadrado} cm^2`)
  console.groupEnd()

  // Codigo del TRIANGULO
  console.group("TRIANGULO 🔺")
  // const ladoTriangulo1 = 6
  // const ladoTriangulo2 = 6
  // const baseTriangulo = 4
  // const alturaTriangulo = 5.5

  // console.log(
  //   `Los lados del triangulo miden: 
  //   ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`
  // )

  // console.log(`La altura del triangulo es de ${alturaTriangulo} cm`)

  function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base
  }

  // console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`)

  function areaTriangulo (base, altura) {
    return (base * altura)/2
  }
  // console.log(`El area del triangulo es ${areaTriangulo} cm^2`)
  console.groupEnd()

  //Codigo del CIRCULO
  console.group("CIRCULO 🟡")

  // Radio
  // const radioCirculo = 4
  // console.log(`El radio del circulo es: ${radioCirculo} cm`)

  // Diametro
  function diametroCirculo (radio) {
    return radio * 2
  }
  // console.log(`El diametro del circulo es: ${diametroCirculo} cm`)

  // PI
  // const PI = 3.1415
  const PI = Math.PI
  // console.log(`El vaor de PI es: ${PI}`)

  // Circunferencia
  function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
  }
  // console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`)

  // Area
  function areaCirculo (radio) {
    return (radio * radio)*PI
  }
  // console.log(`El area del circulo es: ${areaCirculo} cm^2`)
  console.groupEnd()
console.groupEnd()

// INTERACCION CON HTML
function calcularPerimetroCuadrado () {
  const input = document.getElementById("InputCuadrado")
  const value = input.value
  
  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}
function calcularAreaCuadrado () {
  const input = document.getElementById("InputCuadrado")
  const value = input.value
  
  const area = areaCuadrado(value)
  alert(area) 
}