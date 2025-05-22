var agora = new Date()
var hora = agora.getHours()
if (hora < 12){
    console.log(`Agora são ${hora} horas. Bom Dia!`)
} else if (hora <19){
    console.log(`Agora são ${hora} horas. Boa Tarde!`)
} else {
    console.log(`Agora são ${hora} horas. Boa Noite!`)
}