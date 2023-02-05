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
                
                msg.innerHTML = `B O M   D  I  A!`
            
            } else if(hora <= 18){
                img.setAttribute('src','imagens/horasdia/circulo-btarde.jpg')
                    
                main.style.backgroundColor = '#B2D2F0'
               
                msg.innerHTML = `B  O  A   T A R D E!`
                    
            } else if(hora >= 19){
                img.setAttribute('src','imagens/horasdia/circulo-bnoite.jpg')
                
                main.style.backgroundColor = '#0467A0'
               
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
        restab.style.border = '1px solid yellow'
        restab.innerHTML = ''
        let t = Number(tabuada.value)
        for (let c = 1; c <= 10; c++){
            restab.innerHTML += `${t} x ${c} = ${c*t}<br>`
        }
        tabuada.value = ''
        tabuada.focus()
    }
}

function limpart(){
    restab.innerHTML = ''
    tabuada.value = ''
    tabuada.focus()
    restab.style.border = '1px solid white'
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
        inicio.value = ''
        inicio.focus()
        fim.value = ''
        passo.value = ''
    }
}

function limparc(){
    rescont.innerHTML = ''
    inicio.value = ''
    inicio.focus()
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
           
            msg.innerHTML = `B O M   D  I  A!`
            
        } else if(hora >= 13 && hora <= 18){
            img.setAttribute('src','imagens/horasdia/circulo-btarde.jpg')
        
            main.style.backgroundColor = '#B2D2F0'
            
            msg.innerHTML = 'B O A  T A R D E!'
            
        } else if(hora >= 19 || hora <= 5){
            img.setAttribute('src','imagens/horasdia/circulo-bnoite.jpg')
            
            main.style.backgroundColor = '#0467A0'
           
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
        
        msg.innerHTML = `B O M   D  I  A!`
        
    } else if(hora <= 18){
        img.setAttribute('src','imagens/horasdia/circulo-btarde.jpg')
        
        main.style.backgroundColor = '#B2D2F0'
        
        msg.innerHTML = `B  O  A   T A R D E!`
            
    } else if(hora >= 19){
        img.setAttribute('src','imagens/horasdia/circulo-bnoite.jpg')
            
        main.style.backgroundColor = '#0467A0'
        
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

function analisarid(){
    if(nascimento.value.length > 4 || nascimento.value.length <= 3){
        alert('Ano de nascimento invalido!')
        nascimento.value = ''
        nascimento.focus()
    } else {
        let n = Number(nascimento.value)
        let idade = anoatual - n
        let genero = ''
        let imgid = document.createElement('img')
        imgid.setAttribute('id','imgid')
        residade.style.border = '1px solid black'
        msgid.style.border = '1px solid black'
        
        if(sexo[0].checked){
            genero = 'Masculino'
            residade.innerHTML = ''
            
            if(idade <= 3){
                imgid.setAttribute('src','imagens/anaid/bebe-mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um neném do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 4 && idade <= 12){
                imgid.setAttribute('src','imagens/anaid/crianca-mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é uma criança do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 13 && idade <=17){
                imgid.setAttribute('src','imagens/anaid/jovem-mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um jovem do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 18 && idade <= 40){
                imgid.setAttribute('src','imagens/anaid/adulto-mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um adulto do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 41 && idade <= 60){
                imgid.setAttribute('src','imagens/anaid/adulto+mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um adulto do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 61){
                imgid.setAttribute('src','imagens/anaid/idoso-mas.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um idoso do sexo ${genero}.`
                residade.appendChild(imgid)
            }
            nascimento.value = ''
            nascimento.focus()
        
        } else if(sexo[1].checked){
            genero = 'Feminino'
            residade.innerHTML = ''
            
            if(idade <= 3){
                imgid.setAttribute('src','imagens/anaid/bebe-fem.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um neném do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 4 && idade <= 12){
                imgid.setAttribute('src','imagens/anaid/crianca-fem.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é uma criança do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 13 && idade <=17){
                imgid.setAttribute('src','imagens/anaid/jovem-fem.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um jovem do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 18 && idade <= 40){
                imgid.setAttribute('src','imagens/anaid/adulto-fem.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um adulto do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 41 && idade <= 60){
                imgid.setAttribute('src','imagens/anaid/adulto+fem.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um adulto do sexo ${genero}.`
                residade.appendChild(imgid)
            }else if(idade >= 61){
                imgid.setAttribute('src','imagens/anaid/idoso-fem.png')
                msgid.innerHTML = `Você nasceu no ano de ${n}, esse ano você completa<sup>(ou)</sup> ${idade} anos, Você é um idoso do sexo ${genero}.`
                residade.appendChild(imgid)
            }
            nascimento.value = ''
            nascimento.focus()
        }
    }
        
    
    
}

function limparidade(){
    nascimento.value = ''
    nascimento.focus()
    residade.innerHTML = ''
    msgid.innerHTML = ''
    residade.style.border = '1px solid white'
    msgid.style.border = '1px solid white'
}

// ----------------- ANALISADOR DE NÚMEROS ------------

let numero = window.document.getElementById('txtnumero')
let numadc = window.document.getElementById('resnume')
let msgnum = window.document.getElementById('msgnume')
let valores = []

function adicionar(){
    if(entreumcem(numero.value) && !naotem(numero.value, valores)){
        msgnum.innerHTML = ''
        valores.push(Number(numero.value))
        numadc.innerHTML += ` ${numero.value} adicionado!<hr><br>`
    }else{
        alert('[ERRO] NÚMERO INVÁLIDO OU JA FOI ADICIONADO NA LISTA!')
    }
    numero.value = ''
    numero.focus()
}

function analisar(){
    if(valores.length == 0){
        alert ('Adicione números antes de finalizar.')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        msgnum.innerHTML = `Você adicionou ${tot} números.<hr><br>`
        msgnum.innerHTML += `Maior número adicionado ${maior}.<hr><br>`
        msgnum.innerHTML += `Menor número adicionado ${menor}.<hr><br>`
        msgnum.innerHTML += `A soma de todos números é ${soma}.<hr><br>`
        msgnum.innerHTML += `Dividindo ${soma} por ${tot} temos ${media.toFixed(2)}.`
        
    }
    
}

function limparananu(){
    valores = []
    msgnum.innerHTML = ''
    numadc.innerHTML = ''
    numero.focus()
}

function entreumcem(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function naotem(n, l){
    if(l.indexOf(Number(n)) != - 1){
        return true
    }else{
        return false
    }
}

// SCRIPT DAS MEDIASQUEIRES

function mudoutamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}


