var num = window.document.getElementById('txtn')
var res = window.document.getElementById('tab')

function tabuada(){
    if (num.value.length == 0){
        alert('[ERRO] Digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        
        res.innerText = ''
        while (c <= 10){
            var item = document.createElement('option') 
            item.text += `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item) 
            c++
        }
        
        
    }

}
