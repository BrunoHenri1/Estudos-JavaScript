let img = document.getElementById('lamp')
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
let quebrada = false

img.addEventListener('dblclick', function(){
    img.src = 'img/quebrada.jpg'
    quebrada = true
})

ligar.addEventListener('click', function(){
    if (!quebrada){
        img.src = "img/ligada.jpg"
    }
});

desligar.addEventListener('click', function(){
    if (!quebrada){
        img.src = 'img/desligada.jpg'
    }
})

img.addEventListener('mouseenter', function(){
    if (!quebrada){
        img.src = 'img/ligada.jpg'
    }   
})

img.addEventListener('mouseout', function(){
    if (!quebrada){
        img.src = 'img/desligada.jpg'
    }
})
