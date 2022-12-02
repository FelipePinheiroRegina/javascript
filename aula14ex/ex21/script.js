function contagem(){
    let inicio = document.getElementById('txtini')
    let final = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('txtres')

    if (inicio.value.length == 0 || final.value.length == 0) {
        alert ('[ERRO] DIGETE OS CAMPOS CORRETAMENTE!')
        
    } else {
        res.innerHTML = 'Contando..'   
        let i = Number(inicio.value)
        let f = Number(final.value)
        
        if (passo.value.length == 0) {
            alert ('Você não digitou o "passo", vou considerar o "passo 1"')
           p = 1
        
        } else {
           var p = Number(passo.value) 
        }
        
        if (i < f) {
           for (c = i; c <= f; c += p) {
                   res.innerHTML += `.. ${c}`
               }
       
        } else if (i > f) {
           for (c = i; c >= f; c -= p) {
                   res.innerHTML += `.. ${c}`
           }
        }
    }  
}

function tabuada(){
    let tabuada = document.getElementById('txttab')
    let lista = document.getElementById('txtlis')
    if (tabuada.value.length == 0) {
        alert ('Digite um número')
    } else {
        
        t = Number(tabuada.value)
        c = 0
        lista.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text += `${t} x ${c} = ${t*c}`
            item.value = `txtlis${c}`
            lista.appendChild(item)
            c++
        }
    }
}

