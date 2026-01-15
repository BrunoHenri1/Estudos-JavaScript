let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro vetor do valor é ${num[0]}`)
console.log(`Nosso vetor tem o tamanho de ${num.length} indices, antes de adicionar outro valor!`)
num.push(1)

let pos = num.indexOf(0)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}

console.log(`O vetor em ordem crescente é ${num.sort()}`)