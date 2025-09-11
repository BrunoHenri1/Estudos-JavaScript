function adicionarTarefa() {
        //mostra a mensagem quando clica no botão
        let mensagem = "Tarefa adicionada com sucesso!";
        
        //Recebe o valor do usuario
        let inputTarefa = document.getElementById("inputTarefa")
        //atribui o valor do usuario a variavel tarefa e mostra em baixo
        let Tarefa = inputTarefa.value
            document.getElementById("mensagem").textContent = mensagem;

        //cria uma lista de tarefas (li) e atribui os valores numa lista não ordenada (ul)
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")

        //as novas tarefas recebem o valor digitado do input
        novaTarefa.textContent = Tarefa

        //adiciona a tarefa na li
        listaTarefas.appendChild(novaTarefa)

        //limpa o input do usuario
        inputTarefa.value = ""
    }