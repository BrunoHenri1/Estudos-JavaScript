let tarefas = []

function adicionarTarefa() {
    
    let inputTarefa = document.getElementById("inputTarefa")
    let Tarefa = inputTarefa.value.trim()
    let mensagem = document.getElementById("mensagem")
            
        
    if (Tarefa == "") {
            let mensagemErro = "Erro voce não digitou nada"
            mensagem.textContent = mensagemErro;
            mensagem.style.color = "red"
    } else {
            
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "green"

        tarefas.push(Tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
        let listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""

        let i = 0
        for (i; i < tarefas.length; i++){
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefas[i]
            listaTarefas.appendChild(novaTarefa)
        }
}