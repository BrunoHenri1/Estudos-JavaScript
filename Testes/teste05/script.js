function logar(){
    let login = document.getElementById("login")
    let senha = document.getElementById("senha")

    if (login.value == "Bruno" && senha.value == "123"){
        window.alert("Bem vindo ao site")
    } else {
        window.alert("Usuario ou senha incorretos")
    }
}

function cadastrar(){
    const novologin = document.getElementById("novol")
    const novasenha = document.getElementById("novas")
    const confirmsenha = document.getElementById("confirmsenha")

    if (novologin.value.trim() === ""){
        alert("Digite um login!");
        return;
    }

    if(novasenha.value.length < 6){
        alert("A senha deve ter no minimo 6 caracteres!");
        return;
    }

    if (novasenha.value.trim() ===""){
        alert("Digite uma senha válida!");
        return;
    }

    if (confirmsenha.value.trim() === ""){
        alert("Confirme sua senha");
        return;
    }

    if (novasenha.value !== confirmsenha.value){
        alert("Senhas não coincidem!");
        return;
    }

    alert("Usuario Cadastrado")
}   