let txt = document.getElementById('txt')
let result = document.getElementById('result')


let lista = []

function adicionar(){
    let texto = txt.value;

    if (texto === ''){
        alert("Digite uma tarefa para adicionar a lista")
    } else {
        lista.push(texto)
        result.innerHTML += `<p>${texto}</p>`
        txt.value = ''

        let btn = document.createElement('button')
        
    }
}