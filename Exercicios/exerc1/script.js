function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12){
        img.src = "imagens/Manhã.png"
        document.body.style.backgroundColor = "rgba(104, 112, 147)"
    } else if (hora >= 12 && hora <18){
        img.src = "imagens/tarde.png"
        document.body.style.backgroundColor = "rgba(253, 206, 89)"
    } else if (hora >= 18 && hora < 24) {
        img.src = "imagens/noite.png"
        document.body.style.backgroundColor = "rgba(22, 31, 48)"
    } else {
        img.src = "imagens/naoexiste.jpg"
    }

}