let itens = window.document.getElementById('itens')
let blocotab = window.document.getElementById('tab')
let blococont = window.document.getElementById('cont')
let blocohora = window.document.getElementById('horasd')
let blocoanaid = window.document.getElementById('anaid')
let blocoananu = window.document.getElementById('ananu')

function clickMenu(){
    if (itens.style.display == 'none'){
        itens.style.display = 'block'
        main.style.backgroundColor = 'yellow'
    } else {
        itens.style.display = 'none'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
        main.style.display = 'none'
    }  
}

function Tabuada(){
    if (blocotab.style.display == 'none'){
        blocotab.style.display = 'block'
        main.style.display = 'block'
        main.style.backgroundColor = 'yellow'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blocotab.style.display ='none'
        main.style.display = 'none'
       
    }
}

function Contador(){
    if (blococont.style.display == 'none'){
        blococont.style.display = 'block'
        main.style.display = 'block'
        main.style.backgroundColor = 'yellow'
        blocotab.style.display ='none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blococont.style.display = 'none'
        main.style.display = 'none'
        
    }
}

function HorasD(){
    if (blocohora.style.display == 'none'){
        blocohora.style.display = 'block'
        main.style.display = 'block'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocoanaid.style.display = 'none'
        blocoananu.style.display = 'none'
        let horadia = new Date()
        let hora  = horadia.getHours()
        horario.innerHTML = `Agora são ${hora} Horas`
            if(hora <= 12){
                img.setAttribute('src','imagens/horasdia/circulo-bdia.jpg')
                img.style.textAlign = 'center'
                        
                main.style.backgroundColor = '#F3C4A2'
                horario.style.backgroundColor = '#F3C4A2'
                        
                msg.innerHTML = `B O M   D  I  A!`
            
            } else if(hora <= 18){
                img.setAttribute('src','imagens/horasdia/circulo-btarde.jpg')
                    
                main.style.backgroundColor = '#B2D2F0'
                horario.style.backgroundColor = '#B2D2F0'
                    
                msg.innerHTML = `B  O  A   T A R D E!`
                    
            } else if(hora >= 19){
                img.setAttribute('src','imagens/horasdia/circulo-bnoite.jpg')
                main.style.backgroundColor = '#0467A0'
                horario.style.backgroundColor = '#0467A0'
                msg.innerHTML = `B O A  N O I T E!`
                    
            }
    } else {
        blocohora.style.display = 'none'
        main.style.display = 'none'
        
    }
}

function Anaid(){
    if (blocoanaid.style.display == 'none'){
        blocoanaid.style.display = 'block'
        main.style.display = 'block'
        main.style.backgroundColor = 'yellow'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoananu.style.display = 'none'
    } else {
        blocoanaid.style.display = 'none'
        main.style.display = 'none'
    }
}

function Ananu(){
    if (blocoananu.style.display == 'none'){
        blocoananu.style.display = 'block'
        main.style.display = 'block'
        main.style.backgroundColor = 'yellow'
        blocotab.style.display ='none'
        blococont.style.display = 'none'
        blocohora.style.display = 'none'
        blocoanaid.style.display = 'none'
    } else {
        blocoananu.style.display = 'none'
        main.style.display = 'none'
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
let msg = window.document.getElementById('msg')
let horaforçada = window.document.getElementById('txthora')

horario.innerHTML = `Agora são ${hora} Horas`

function forçar(){
    hora = Number(horaforçada.value)
    if(hora > 23){
        alert('Horário incorreto!')
    } else{
        horario.innerHTML = `Agora são ${hora} Horas`
        
        if(hora >= 6 && hora <= 12){
            img.setAttribute('src','imagens/horasdia/circulo-bdia.jpg')
        
            main.style.backgroundColor = '#F3C4A2'
            horario.style.backgroundColor = '#F3C4A2'    
        
            msg.innerHTML = `B O M   D  I  A!`
            
        } else if(hora >= 13 && hora <= 18){
            img.setAttribute('src','imagens/horasdia/circulo-btarde.jpg')
        
            main.style.backgroundColor = '#B2D2F0'
            horario.style.backgroundColor = '#B2D2F0'
        
            msg.innerHTML = 'B O A  T A R D E!'
            
        } else if(hora >= 19 || hora <= 5){
            img.setAttribute('src','imagens/horasdia/circulo-bnoite.jpg')
            
            main.style.backgroundColor = '#0467A0'
            horario.style.backgroundColor = '#0467A0'
            
            msg.innerHTML = `B  O  A   N O  I T E!`
        }  
    }
    horaforçada.value = ''
    horaforçada.focus()
}

function limparh(){
    hora = horadia.getHours()
    horario.innerHTML = `Agora são ${hora} Horas`
        
    if(hora <= 12){
        img.setAttribute('src','imagens/horasdia/circulo-bdia.jpg')
            
        main.style.backgroundColor = '#F3C4A2'
        horario.style.backgroundColor = '#F3C4A2'
            
        msg.innerHTML = `B O M   D  I  A!`
        
    } else if(hora <= 18){
        img.setAttribute('src','imagens/horasdia/circulo-btarde.jpg')
        
        main.style.backgroundColor = '#B2D2F0'
        horario.style.backgroundColor = '#B2D2F0'
            
        msg.innerHTML = `B  O  A   T A R D E!`
            
    } else if(hora >= 19){
        img.setAttribute('src','imagens/horasdia/circulo-bnoite.jpg')
            
        main.style.backgroundColor = '#0467A0'
        horario.style.backgroundColor = '#0467A0'
            
        msg.innerHTML = `B  O  A   N O  I T E!`
    }
    horaforçada.value = ''
    horaforçada.focus()
} 

// ------------- ANALISADOR DE IDADE ----------------

let ano = new Date()
let anoatual = ano.getFullYear()
let nascimento = window.document.getElementById('txtnasc')
let sexo = window.document.getElementsByName('sexo')
let residade = window.document.getElementById('residade')
let msgid = window.document.getElementById('msgid')

function analisar(){
    if(nascimento.value.length > 4){
        alert('Ano de nascimento invalido!')
        nascimento.value = ''
        nascimento.focus()
    } else {
        let n = Number(nascimento.value)
        let idade = anoatual - n
        let genero = ''
        let imgid = document.createElement('img')
        imgid.setAttribute('id','imgid')
    
        if(sexo[0].checked){
            genero = 'Masculino'
            
            if(idade < 3){
                imgid.setAttribute('src','imagens/anaid/bebe-mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um neném do sexo ${genero}.`
                residade.appendChild(imgid)
            } 
        
        } else if(sexo[1].checked){
            genero = 'Feminino'
        }
    }
        
    
    
}

function limparidade(){
    nascimento.value = ''
    nascimento.focus()
    residade.innerHTML= ''
}



