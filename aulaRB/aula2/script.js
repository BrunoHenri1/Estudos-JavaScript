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

        
        for (let i = 0; i < tarefas.length; i++){
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefas[i]

            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"
            botaoRemover.textContent = "Remover "
            botaoRemover.onclick = ()=> removerTarefa(i)

            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent = "Editar"
            botaoEditar.onclick = () => editarTarefa(i)
                

            novaTarefa.appendChild(botaoRemover)
            novaTarefa.appendChild(botaoEditar)
            listaTarefas.appendChild(novaTarefa)
        }
}

function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i){
    let tarefaEditada = prompt("Edita a Tarefa: ")
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}