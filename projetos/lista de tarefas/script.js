let tarefas = []

function adc() {
    let tarefaInput = document.getElementById("txt")
    let tarefa = tarefaInput.value.trim()

    let mensagem = document.getElementById("mensagem")

    mensagem.textContent = `${tarefaInput.value}`

    if (tarefa == ""){
        mensagem.textContent = "Digite uma Tarefa!"
        mensagem.style.color = "red"
    } else {
        mensagem.textContent = "Tarefa Adicionada com Sucesso"
        mensagem.style.color = "green"

        tarefas.push(tarefa)
    }
    tarefaInput.value = ""
}
