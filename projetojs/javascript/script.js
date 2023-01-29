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

// --------- TABUADA -------------

let tabuada = window.document.getElementById('txtab')
let restab = window.document.querySelector('div#restab')

function gerar(){
    if (tabuada.value.length == 0) {
        alert ('Digite um número para gerar a tabuada!')
    } else {
        restab.innerHTML = ''
        let t = Number(tabuada.value)
        for (let c = 1; c <= 10; c++){
            restab.innerHTML += `${t} x ${c} = ${c*t}<br>`
        }
    }
}

function limpart(){
    restab.innerHTML = ''
}

// -------- CONTADOR ---------------

let inicio = window.document.getElementById('txtinicio')
let fim = window.document.getElementById('txtfim')
let passo = window.document.getElementById('txtpasso')
let rescont = window.document.getElementById('rescont')

function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0){
        alert ('[CAMPO VAZIO!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p == 0){
            alert ('"Passo Vazio!", Considerando "Passo 1"')
            p = 1
        }
        rescont.innerHTML = 'Contagem iniciada:'
        if(i < f){
            for(let c = i; c <= f; c+= p){
                rescont.innerHTML += ` ${c}.. \u{1F418} `
            }
        } else if(i > f){
            for(let c = i; c >= f; c-= p){
                rescont.innerHTML += `
                ${c}.. \u{1F418}`
            }
        }
    }
}

function limparc(){
    rescont.innerHTML = ''
}

// ----------- HORAS DO DIA --------------

let horadia = new Date()
let hora  = horadia.getHours()
let minutos = horadia.getMinutes()
let horario = window.document.getElementById('horario')
let reshora = window.document.getElementById('reshora')
let img = window.document.getElementById('img')

horario.innerHTML = `Agora são ${hora} Horas ${minutos} Minutos`

if(hora > 18){
    reshora.innerHTML = 'Bom dia'
    img.setAttribute('src','imagens/boatarde-p.jpg')
    reshora.appendChild(img)
}else {
    reshora.innerHTML = 'troxa'
}
