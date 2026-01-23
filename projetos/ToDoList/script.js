let txt = document.getElementById('txt')
let result = document.getElementById('result')

function adicionar(){
    let texto = txt.value;
    

    if (texto === ''){
        alert("Digite uma tarefa para adicionar a lista")
    }
    //botão para remover
    let remover = document.createElement ("button")
        remover.textContent = "Remover"
    remover.addEventListener('click',function(){
        result.removeChild(p)
    })

    //Botão Editar
    let p = document.createElement ("p")
        p.textContent = texto
    let editar = document.createElement("button")
        editar.textContent = "Editar"
    editar.addEventListener('click', function(){
        let novoTexto = prompt("Editar a tarefa")
        if (novoTexto === ""){
            alert("Digite uma tarefa para adicionar a lista")
        }
        p.textContent = novoTexto
        p.appendChild(editar)
        p.appendChild(remover)
    })
    p.appendChild(editar)
    p.appendChild(remover)
    result.appendChild(p)

    txt.value = ''
}