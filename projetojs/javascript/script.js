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
let horario = window.document.getElementById('horario')
let reshora = window.document.getElementById('reshora')
let img = window.document.getElementById('img')
let main = window.document.getElementById('m')
let b = window.document.getElementById('bomdia')

horario.innerHTML = `Agora são ${hora} Horas`

if(hora <= 12){
    img.setAttribute('src','imagens/bomdia.jpg')
    img.style.left = '20px'
    img.style.borderRadius = '5px'
    img.style.height = '285px'
    img.style.boxShadow = '1px 1px 10px #F3C4A2'
        
    main.style.backgroundColor = '#F3C4A2'
    horario.style.backgroundColor = '#F3C4A2'
        
    b.style.padding = '50px'
    b.style.fontSize = '4vh'
    b.style.float = 'left'
    b.innerHTML = `B <br> O <br> M <br> D <br> I <br> A <br> !`

} else if(hora <= 18){
    img.setAttribute('src','imagens/boatarde.jpg')
    img.style.left = '25px'
    img.style.top = '10px'
    img.style.borderRadius = '5px'
    img.style.boxShadow = '1px 1px 10px #B2D2F0'

    main.style.backgroundColor = '#B2D2F0'
    horario.style.backgroundColor = '#B2D2F0'
    
    b.style.float = ''
    b.innerHTML = `B  O  A   T A R D E!`
    b.style.textAlign = 'center'
    b.style.marginTop = '20px'
    b.style.fontSize = '6vh'
    
} else if(hora >= 19){
    img.setAttribute('src','imagens/boanoite.jpg')
    img.style.left = '25px'
    img.style.top = '10px'
    img.style.borderRadius = '5px'
    img.style.boxShadow = '1px 1px 10px #0467A0'

    main.style.backgroundColor = '#0467A0'
    horario.style.backgroundColor = '#0467A0'
    
    b.style.float = ''
    b.innerHTML = `B  O  A   N O  I T E!`
    b.style.textAlign = 'center'
    b.style.marginTop = '20px'
    b.style.fontSize = '6vh'
}

function forçar(){
    let horaforçada = window.document.getElementById('txthora')
    hora = Number(horaforçada.value)
    horario.innerHTML = `Agora são ${hora} Horas`
    
    if(hora >= 6 && hora <= 12){
        img.setAttribute('src','imagens/bomdia.jpg')
        img.style.left = '20px'
        img.style.borderRadius = '5px'
        img.style.height = '285px'
        img.style.boxShadow = '1px 1px 10px #F3C4A2'
        
        main.style.backgroundColor = '#F3C4A2'
        horario.style.backgroundColor = '#F3C4A2'
        
        b.style.padding = '50px'
        b.style.fontSize = '4vh'
        b.style.float = 'left'
        b.innerHTML = `B <br> O <br> M <br> D <br> I <br> A <br> !`
        
    } else if(hora >= 13 && hora <= 18){
        img.setAttribute('src','imagens/boatarde.jpg')
        img.style.left = '25px'
        img.style.top = '10px'
        img.style.borderRadius = '5px'
        img.style.boxShadow = '1px 1px 10px #B2D2F0'

        main.style.backgroundColor = '#B2D2F0'
        horario.style.backgroundColor = '#B2D2F0'
    
        b.style.float = ''
        b.innerHTML = `B  O  A   T A R D E!`
        b.style.textAlign = 'center'
        b.style.marginTop = '20px'
        b.style.fontSize = '6vh'
    
    } else if(hora >= 19 || hora <= 5){
        img.setAttribute('src','imagens/boanoite.jpg')
        img.style.left = '25px'
        img.style.top = '10px'
        img.style.borderRadius = '5px'
        img.style.boxShadow = '1px 1px 10px #0467A0'

        main.style.backgroundColor = '#0467A0'
        horario.style.backgroundColor = '#0467A0'
        
        b.style.float = ''
        b.innerHTML = `B  O  A   N O  I T E!`
        b.style.textAlign = 'center'
        b.style.marginTop = '20px'
        b.style.fontSize = '6vh'
    }
}

function limparh(){
    hora = horadia.getHours()
    horario.innerHTML = `Agora são ${hora} Horas`
    
    if(hora <= 12){
        img.setAttribute('src','imagens/bomdia.jpg')
        img.style.left = '20px'
        img.style.borderRadius = '5px'
        img.style.height = '285px'
        img.style.boxShadow = '1px 1px 10px #F3C4A2'
        
        main.style.backgroundColor = '#F3C4A2'
        horario.style.backgroundColor = '#F3C4A2'
        
        b.style.padding = '50px'
        b.style.fontSize = '4vh'
        b.style.float = 'left'
        b.innerHTML = `B <br> O <br> M <br> D <br> I <br> A <br> !`
    
    } else if(hora <= 18){
        img.setAttribute('src','imagens/boatarde.jpg')
        img.style.left = '25px'
        img.style.top = '10px'
        img.style.borderRadius = '5px'
        img.style.boxShadow = '1px 1px 10px #B2D2F0'

        main.style.backgroundColor = '#B2D2F0'
        horario.style.backgroundColor = '#B2D2F0'
        
        b.style.float = 'right'
        b.innerHTML = `B  O  A   T A R D E!`
        b.style.textAlign = 'center'
        b.style.marginTop = '20px'
        b.style.fontSize = '6vh'
    
    } else if(hora >= 19){
        img.setAttribute('src','imagens/boanoite.jpg')
        img.style.left = '25px'
        img.style.top = '10px'
        img.style.borderRadius = '5px'
        img.style.boxShadow = '1px 1px 10px #0467A0'

        main.style.backgroundColor = '#0467A0'
        horario.style.backgroundColor = '#0467A0'
        
        b.style.float = ''
        b.innerHTML = `B  O  A   N O  I T E!`
        b.style.textAlign = 'center'
        b.style.marginTop = '20px'
        b.style.fontSize = '6vh'
    }
}

