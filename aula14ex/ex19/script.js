function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0){
        alert ('[ERRO, PREENCHA TODOS OS DADOS!') 
    } else {
        res.innerHTML = 'Contando..'
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        
        if ( p == 0) {
            alert ('Você não digitou o "PASSO", considerando o "PASSO 1"')
            p = 1
        }   

        if (i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c}..`
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c}`
            }
        }   
        res.innerHTML += `. FIM \u{1F595}`    
    }
}