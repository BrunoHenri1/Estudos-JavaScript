let numeros = []
let num = document.getElementById("num")
let lista = document.getElementById("flista")
let res = document.getElementById("res")

function isNumero(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, numeros)){
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("Valor inválido ou ja colocado na Lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (numeros.length == 0){
        alert("Adicione valores!!")
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for (let pos in numeros){
            soma += numeros[pos]
            if (numeros[pos] > maior)
                maior = numeros[pos]
            if (numeros[pos] < menor)
                menor = numeros[pos]
        }
        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor é o ${maior}</p>`
        res.innerHTML += `<p> O menor numero é ${menor}</p>`
        res.innerHTML += `<p> Somando os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`

    }
}

