var inicio = window.document.getElementById('txt1')
var fim = window.document.getElementById('txt2')
var passo = window.document.getElementById('txt3')
var res = window.document.getElementById('res')

function contar(){
if (inicio.value.length == 0 || fim.value.length == 0){
    alert('[ERRO] Preencha os campos!')
} else {
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    if (p == ''){
        alert('considerando passo 1')
        p = 1
    }
    res.innerText = 'Contando..'
    if (i < f){
        for (c = i; c <= f;c += p){
            res.innerHTML += `.. ${c}`
        }
    } else {
        for (c = i; c >= f; c -= p){
            res.innerHTML += `.. ${c}`
        }
    }

}

}
