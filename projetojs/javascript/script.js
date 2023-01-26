let itens = window.document.getElementById('itens')
let blocotab = window.document.getElementById('tab')
let blococont = window.document.getElementById('cont')
let blocohora = window.document.getElementById('horasd')
let blocoanaid = window.document.getElementById('anaid')
let blocoananu = window.document.getElementById('ananu')

function clickMenu(){
    if (itens.style.display == 'none'){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
    }  
}

function Tabuada(){
    if (blocotab.style.display == 'none'){
        blocotab.style.display = 'block'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blocotab.style.display ='none'
       
    }
}

function Contador(){
    if (blococont.style.display == 'none'){
        blococont.style.display = 'block'
        blocotab.style.display ='none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blococont.style.display = 'none'
        
    }
}

function HorasD(){
    if (blocohora.style.display == 'none'){
        blocohora.style.display = 'block'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blocohora.style.display = 'none'
    }
}

function Anaid(){
    if (blocoanaid.style.display == 'none'){
        blocoanaid.style.display = 'block'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blocoanaid.style.display = 'none'
    }
}

function Ananu(){
    if (blocoananu.style.display == 'none'){
        blocoananu.style.display = 'block'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
    } else {
        blocoananu.style.display = 'none'
    }
}
