let numero = window.document.querySelector('input#txtnum')
let lista = window.document.querySelector('select#list')
let resultado = window.document.getElementById('res')
let valores = []

function onumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function nalista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function Adicionar(){
    if (onumero(numero.value) && !nalista(numero.value, valores)){
            valores.push(Number(numero.value))
            let item = document.createElement('option')
            item.text = `Número ${numero.value} Adicionado!`
            lista.appendChild(item)
            resultado.innerHTML = ''

    } else {
        alert('Valor invalido ou ja encontrado na lista!')
    }
    numero.value = ''
    numero.focus()
}

function Finalizar(){
    if (valores.length == 0){
        window.alert('Adicione números antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            media = soma / tot
            
        }
        resultado.innerHTML = `<p>Você adicionou ${tot} números ao todo. </p>`
        resultado.innerHTML += `<p>O maior número adicionado é ${maior}.</p>`
        resultado.innerHTML += `<p>O menor número adicionado é ${menor}.</p>`
        resultado.innerHTML += `<p>A soma dos valores adicionados é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores adicionados é ${media.toFixed(2)}.</p>`
    }

   
    

}