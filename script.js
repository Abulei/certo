function somar() {
    
    // Pegar valores dos inputs
    let numero = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    // Somar os dois valores
    let resultado = parseFloat(numero1) + parseFloat(numero2)

    // Imprimir o resultado (alertbox)
    alert(resultado)
}
function dividir() {

    // Pegar valores dos inputs
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    // Somar os dois valores
    let resultado = parseFloat(numero1) / parseFloat(numero2)

    // Imprimir o resultado (alertbox)
    alert(resultado)
} 
function subitrair() {

    // Pegar valores dos inputs
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    // subitrai os dois valores
    let resultado = parseFloat(numero1) - parseFloat(numero2)

    // Imprimir o resultado (alertbox)
    alert(resultado)
} 
function multiplicar() {

    // Pegar valores dos inputs
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    // Somar os dois valores
    let resultado = parseFloat(numero1) * parseFloat(numero2)

    // Imprimir o resultado (alertbox)
    alert(resultado)
}