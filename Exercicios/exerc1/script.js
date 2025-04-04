function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora > 6 && hora < 12){
        img.src = "imagens/manhã.png"
        document.body.style.background = "#6b7195"
        
    } else if (hora >= 12 &&hora <= 18){
        img.src = "imagens/tarde.png"
        document.body.style.background = "#f2b66f"

    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = "#1b233b"
    }
    
}