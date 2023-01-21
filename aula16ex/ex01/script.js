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
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores){
            if (pos.value > maior.value){
                maior = pos
            }
        }
    }

    resultado.innerHTML = `O maior número é ${maior}`

}