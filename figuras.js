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

// 🟩

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

// 🔺

function calcularPerimetroTriangulo () {
  const input1 = document.getElementById("InputTriangulo1")
  const value1 = Number(input1.value)
  
  
  const input2 = document.getElementById("InputTriangulo2")
  const value2 = Number(input2.value)
  

  const base3 = document.getElementById("InputTrianguloB")
  const baseValue = Number(base3.value)
  
  
  const perimetro = perimetroTriangulo(value1, value2, baseValue)
  alert(perimetro)
}

function calcularAreaTriangulo () {
  const input1 = document.getElementById("InputTrianguloB")
  const valueB = Number(input1.value)

  const input2 = document.getElementById("InputTrianguloH")
  const valueH = Number(input2.value)

  const area = areaTriangulo(valueB, valueH)
  alert(area)
}

// Ejercicio H 🔺isoceles

function alturaIsoceles (lado, base) {
  const BaseTriangulo = Number(base/2)
  return Math.sqrt((Math.pow(lado, 2))-(Math.pow(BaseTriangulo, 2)))

}

function calcularAlturaTrianguloI () {

  const input1 = document.getElementById("InputTrianguloLadoA")
  const valueL = Number(input1.value)
  
  const input2 = document.getElementById("InputTrianguloBase")
  const valueB = Number(input2.value)

  const input3 = document.getElementById("InputTrianguloLadoB")
  const valueL2 = Number(input3.value)

  if (valueL === valueL2) {
    const altura = alturaIsoceles(valueL, valueB)
    alert(altura)
  } else {
    alert("sorry tu 🔺 no es isoceles")
  }
}

// 🟡

function calculoPerimetroCirculo () {
  const input = document.getElementById("InputRadio")
  const value = Number(input.value)
  const diametro = diametroCirculo(value)

  const perimetro = diametro * PI
  alert(perimetro)
}

function calculoAreaCirculo () {
  const input = document.getElementById("InputRadio")
  const value = Number(input.value)

  const area = areaCirculo(value)
  alert(area)
}






