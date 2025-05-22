var idade = 15
 if (idade < 16){
    console.log(`Voce tem ${idade} anos, voce não vota`)
 } else if (idade < 18 || idade > 65) {
    console.log(`Voce tem ${idade} anos, seu voto é opcional`)
} else {
    console.log(`Voce tem ${idade} anos, voce Vota!`)
 }