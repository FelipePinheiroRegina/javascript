function tabuada(){
    let t = document.getElementById('t')
    let mostratab = document.getElementById('tab')
    
    if (t.value == 0){
        alert ('Digite um número para gerar a tabuada!')
    } else {
        let numtab = Number(t.value)
        let c = 0
        mostratab.innerHTML = ''
        
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${numtab} x ${c} = ${numtab*c}`
            item.value = `tab${c}`
            mostratab.appendChild(item)
            c++
        }    
        
    }

    
    
}