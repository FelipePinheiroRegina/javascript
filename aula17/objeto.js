let amigo = {nome:'jose', 
sexo:'M', 
peso: 85.4, 
engordou(p=0){
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
    console.log('Engordou')
    this.peso += p
}}

amigo.engordou(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)