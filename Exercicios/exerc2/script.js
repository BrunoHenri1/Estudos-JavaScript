function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById("txtano")
    var res = document.getElementById('res')

    if (Fano.value.length == 0 || Fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(Fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gen = "homem"
            if (idade >=0 && idade <=10){
                img.setAttribute('src', "imagens/menino.png")

            } else if (idade <21) {
                img.setAttribute('src', "imagens/moço.png")
        
            } else if ( idade < 50){
                img.setAttribute('src', "imagens/homem.png")

            } else {
                img.setAttribute('src', "imagens/idoso.png")

            }

        } else if (fsex[1].checked){
            gen = "Mulher"
            if (idade >=0 && idade <=10){
                img.setAttribute('src', "imagens/menina.png")

            } else if (idade <21) {
                img.setAttribute('src', "imagens/moça.png")
        
            } else if ( idade < 50){
                img.setAttribute('src', "imagens/mulher.png")

            } else {
                img.setAttribute('src', "imagens/idosa.png")
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}
