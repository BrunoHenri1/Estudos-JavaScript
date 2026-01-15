let valores = [8,1,7,4,2,9]

/*for (let pos=0; valores.length > pos; pos++){
    console.log(`O vetor na posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores){
    console.log(`O vetor na posição ${pos} tem o valor ${valores[pos]}`)
}