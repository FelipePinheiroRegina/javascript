var data = new Date()
var ano = data.getFullYear()
var nascimento = window.document.getElementById('txt1')
var res = window.document.getElementById('res')
var sexo = window.document.getElementsByName('sexo')

function checar(){
    var nasc = Number(nascimento.value)
    var idade = ano - nasc
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    if (sexo[0].checked){
        var genero =  'Masculino'
        if (idade <= 9){
            res.innerHTML = `Você é uma <strong>criança</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/bebemasculino.png')
        } else if (idade <= 18){
            res.innerHTML = `Você é um <strong>Adolescente</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/jovemmasculino.png')
        } else if (idade <= 65){
            res.innerHTML = `Você é um <strong>Adulto</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/adultomasculino.png')
        } else if (idade > 66) {
            res.innerHTML = `Você é um <strong>Idoso</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/idosomasculino.png')
        }
        
    } else if (sexo[1].checked){
        var genero = 'Feminino'
        if (idade <= 9){
            res.innerHTML = `Você é uma <strong>criança</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/bebefeminino.png')
        } else if (idade <= 18){
            res.innerHTML = `Você é uma <strong>Adolescente</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/jovemfeminino.png')
        } else if (idade <= 65){
            res.innerHTML = `Você é uma <strong>Adulta</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/adultofeminino.png')
        } else if (idade > 66) {
            res.innerHTML = `Você é uma <strong>Idosa</strong> do sexo <strong>${genero}</strong> e tem <strong>${idade}</strong> anos`
            img.setAttribute('src','imagens/idosofeminino.png')
        }
    }
    res.appendChild(img) 
    

}