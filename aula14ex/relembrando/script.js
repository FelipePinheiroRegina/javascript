function horadia(){
    var data = new Date()
    var hora = data.getHours()
    
    var img = window.document.getElementById('imagem')
    var mensagem = window.document.getElementById('msg')
    mensagem.innerHTML = `AGORA SÃO ${hora} HORAS<BR>`

    if (hora <= 12) {
        mensagem.innerText += 'BOM DIA!!!'
        img.src = 'imagens/fotomanha.png'
        document.body.style.backgroundColor = '#B3C8CF'
    } else if (hora <= 18) {
        mensagem.innerText += 'BOA TARDE!!!'
        img.src = 'imagens/fototarde.png'
        document.body.style.backgroundColor = '#E98F4C'
    } else if (hora <= 23) {
        mensagem.innerText += 'BOA NOITE!!!'
        img.src = 'imagens/fotonoite.png'
        document.body.style.backgroundColor = '#5C466D'
    }
}