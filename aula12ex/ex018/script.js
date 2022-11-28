function checar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var resp = ano - Number(nascimento.value)
    if (nascimento.value == 0 || nascimento.value > ano){
        alert('[ERRO] PREENCHA OS DADOS CORRETAMENTE!')
    } else {
        var genero = ''
        var sexo = window.document.getElementsByName('sexo')
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Masculino'
            if (resp >= 0 && resp < 10){
                img.setAttribute('src', 'bebemasculino.png')
            } else if (resp < 21){
                img.setAttribute('src', 'jovemmasculino.png')
            } else if (resp < 50){
                img.setAttribute('src', 'adultomasculino.png')
            } else if (resp > 50){
                img.setAttribute('src', 'idosomasculino.png')
            }
        } else {
            genero = 'Feminino'
            if (resp >= 0 && resp < 10){
                img.setAttribute('src', 'bebefeminino.png')
            } else if (resp < 21){
                img.setAttribute('src', 'jovemfeminino.png')
            } else if (resp < 50){
                img.setAttribute('src', 'adultofeminino.png')
            } else if (resp > 50){
                img.setAttribute('src', 'idosofeminino.png')
            }
        }
        
        
        res.style.color = 'white'
        res.style.backgroundColor = 'rgb(22, 68, 22)'
        res.innerHTML = `Identificamos que você tem <strong>"${resp} anos"</strong> e é do sexo <strong>"${genero}"</strong><br>`
        res.appendChild(img)
    }
}