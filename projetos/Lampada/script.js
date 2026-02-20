let img = document.getElementById('lamp')
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')

ligar.addEventListener('click', function(){
    img.src = "img/ligada.jpg"
});

desligar.addEventListener('click', function(){
    img.src = 'img/desligada.jpg'
})

img.addEventListener('dblclick', function(){
    img.src = 'img/quebrada.jpg'
})