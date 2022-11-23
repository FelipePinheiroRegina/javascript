var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas!`)
if (hora < 12){
    console.log('BOM DIAAA!')
} else if (hora <= 18){
    console.log('BOA TARDEEE!')
} else if (hora <= 23){
    console.log('BOA NOITEEE!')
}