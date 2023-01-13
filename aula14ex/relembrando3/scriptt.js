var inicio = window.document.getElementById('txt1')
var fim = window.document.getElementById('txt2')
var passo = window.document.getElementById('txt3')
var res = window.document.querySelector('div#res')

function contar(){
    res.innerHTML = 'Contando..'
    
    if(inicio.value.length == 0 || fim.value.length == 0){
        alert ('[ERRO] Preencha os campos!')
    
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p == 0){
            alert ('Você não digitou o Passo, irei considerar o Passo como 1')
            p = 1
        }
        
        if(i < f){
            for(c = i;c <= f;c += p){
            res.innerHTML += `.. ${c}`
            }
        } else if (i > f){
            for(c = i;c >= f;c -= p){
                res.innerHTML += `.. ${c}`
            }

        }
    } 
        
     
        
        
    

}

