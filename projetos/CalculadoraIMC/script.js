let n = document.getElementById('txtnome')
let alt = document.getElementById('alt')
let peso = document.getElementById('peso')



function calcular(){
    let nome = n.value.trim()
    if (nome === ''){
        alert("Digite um nome válido")
    }
    alert(`${alt}`)
}