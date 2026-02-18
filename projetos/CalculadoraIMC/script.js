let n = document.getElementById('txtnome')
let alt = document.getElementById('alt')
let peso = document.getElementById('peso')
let resul = document.getElementById('res')

function calcular(){
    let nome = n.value.trim()
    let classificação = ''
    if (nome === ''){
        alert("Digite um nome válido")
    }
    let imc = peso.value / (alt.value*alt.value)
    if (imc < 18.5){
        classificação = "Magreza"
    } else if (imc > 18.5 && imc < 24.9){
        classificação = "Normal"
    } else if (imc > 25 && imc < 29.9){
        classificação = "Sobrepeso"
    } else if (imc > 30 && imc < 39.9){
        classificação = "Obesidade"
    } else {
        classificação = "Obesidade grave"
    }
    
    resul.textContent = `${n.value} seu IMC é ${imc.toFixed(2)}, voce esta com ${classificação}`;
    
}