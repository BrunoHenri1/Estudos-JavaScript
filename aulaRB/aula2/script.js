function adicionarTarefa() {
        let mensagem = "Tarefa adicionada com sucesso!";
            
        let inputTarefa = document.getElementById("inputTarefa")
        let Tarefa = inputTarefa.value
            document.getElementById("mensagem").textContent = mensagem;

        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")

        novaTarefa.textContent = Tarefa

        listaTarefas.appendChild(novaTarefa)

        inputTarefa.value = ""
    }