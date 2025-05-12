var idade = 69

if (idade < 16){
    console.log(`Com ${idade} anos voce não vota!`)
} else if (idade < 18 || idade > 65) {
    console.log(`Com ${idade} seu voto é opcional`)
} else {
    console.log(`Com ${idade} seu voto é obrigatório`)
}