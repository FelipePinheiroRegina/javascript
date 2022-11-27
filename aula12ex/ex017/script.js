function checar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ianonasc')
    var res = window.document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
        alert('[ERRO] Preencha os dados corretamente')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (sexo[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebemasculino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemmasculino.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultomasculino.png')
            } else if (idade > 50){
                img.setAttribute('src', 'idosomasculino.png')
            }
        }else {
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebefeminino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemfeminino.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultofeminino.png')
            } else if (idade > 50){
                img.setAttribute('src', 'idosofeminino.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos que voce é do Sexo ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }

}