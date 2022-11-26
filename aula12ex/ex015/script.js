function carregar () {
    var dia = window.document.getElementById('dia')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hdia = agora.getHours()
    dia.innerHTML = `Agora são exatamente ${hdia} Horas.` 
    if (hdia >= 0 && hdia <= 12) {
        img.src = 'imagens/fotomanha.png'
        window.document.body.style.backgroundColor = '#c1cccd'
    } else if (hdia >= 13 && hdia <= 18) {
        img.src = 'imagens/fototarde.png'
        window.document.body.style.backgroundColor = '#dfb098'
    } else {
        img.src = 'imagens/fotonoite.png'
        window.document.body.style.backgroundColor = '#524064'
    }
}
