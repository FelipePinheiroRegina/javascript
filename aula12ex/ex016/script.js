function carregar() {
    var rotina = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horadia = new Date()
    var hora = horadia.getHours()
    rotina.innerHTML = `Agora são exatamente ${hora} Horas.`
    if (hora >= 8 && hora <= 11){
        img.src = 'imagens/trabalhar.png'
        rotina.innerHTML += '<p>Horário que você está trabalhando... </p>'
        window.document.body.style.backgroundColor = '#9f9487'
    }else if (hora >= 12 && hora <= 13){
        img.src = 'imagens/treinar.png'
        rotina.innerHTML += '<p>Horário que você está treinando... </p>'
        window.document.body.style.backgroundColor = '#555658'
    }else if (hora >= 14 && hora <= 17){
        img.src = 'imagens/trabalhar.png'
        rotina.innerHTML += '<p>Horário que você está trabalhando... </p>'
        window.document.body.style.backgroundColor = '#9f9487'
    }else if (hora >= 18 && hora <= 23){
        img.src ='imagens/estudar.png'
        rotina.innerHTML += '<p>Horário que você está estudando... </p>'
        window.document.body.style.backgroundColor = '#74533a'
    }else {
        img.src = 'imagens/dormir.png'
        rotina.innerHTML += '<p>Horário que você está descansando... </p>'
        window.document.body.style.backgroundColor = '#5a7190'
    }
}